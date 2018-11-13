import * as fs from 'fs';
import { map } from 'lodash/fp';
import * as path from 'path';
import prettier from 'prettier';
import * as util from 'util';

import { generateAllTypes } from './src/generateAllTypes';
import { generateIndex } from './src/generateIndex';

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const LIB_PATH = path.join(__dirname, './generated');

async function format(filepath: string) {
  const contents = await readFile(filepath);
  return {
    contents: prettier.format(contents.toString(), {
      parser: 'typescript',
      printWidth: 100,
      singleQuote: true,
    }),
    filepath,
  };
}

async function generate() {
  await generateAllTypes();
  const filenames = await readdir(LIB_PATH);
  await generateIndex(
    map(filename => `./${filename.replace('.ts', '')}`, filenames),
  );

  filenames.push('index.ts');

  const formatted = await Promise.all(
    filenames.map(filename => format(path.join(LIB_PATH, filename))),
  );

  await Promise.all(
    formatted.map(({ contents, filepath }) => writeFile(filepath, contents)),
  );
}

generate();
