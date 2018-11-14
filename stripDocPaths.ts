import cliProgress from 'cli-progress';

import * as fs from 'fs';
import { map } from 'lodash/fp';
import * as path from 'path';
import recursiveReadDir from 'recursive-readdir';
import * as util from 'util';

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

/**
 * Strip out local file paths which expose paths outside of the project directoy
 * @param filename
 */
async function updatePaths(filename: string) {
  const filepath = path.join(__dirname, filename);
  const contents = await readFileAsync(filepath);
  const updated = contents
    .toString()
    .replace(/(Defined in )(.*?)(node_modules.*:\d+)/g, '$1$3');
  return writeFileAsync(filepath, updated);
}

async function stripPaths() {
  const progress = new cliProgress.Bar({
    format: 'Cleaning file paths [{bar}] {percentage}% {value}/{total}',
    stopOnComplete: true,
  });
  const filenames = await recursiveReadDir('./docs');
  progress.start(filenames.length, 0);
  await Promise.all(
    map(
      filename => updatePaths(filename).then(() => progress.increment(1)),
      filenames,
    ),
  );
  // tslint:disable-next-line:no-console
  console.log('\nDone!');
}

stripPaths();
