import * as fs from 'fs';
import * as path from 'path';
import prettier from 'prettier';
import * as util from 'util';

import { generateAllTypes } from './src/generateAllTypes';

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const LIB_PATH = path.join(__dirname, './lib');

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
  generateAllTypes();

  const filenames = await readdir(LIB_PATH);
  const formatted = await Promise.all(
    filenames.map(filename => format(path.join(LIB_PATH, filename))),
  );
  await Promise.all(
    formatted.map(({ contents, filepath }) => writeFile(filepath, contents)),
  );
}

generate();
