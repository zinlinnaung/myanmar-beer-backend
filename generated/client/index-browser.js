
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Tbl_gtransScalarFieldEnum = {
  gtid: 'gtid',
  olcity: 'olcity',
  oltsp: 'oltsp',
  olname: 'olname',
  gcarange: 'gcarange',
  gcumobile: 'gcumobile',
  gcwinitem: 'gcwinitem',
  sa: 'sa',
  sb: 'sb',
  sc: 'sc',
  gstatus: 'gstatus',
  gdt: 'gdt'
};

exports.Prisma.Tbl_logsScalarFieldEnum = {
  logid: 'logid',
  logdt: 'logdt',
  logtype: 'logtype',
  logref: 'logref',
  logtext: 'logtext'
};

exports.Prisma.Tbl_outletScalarFieldEnum = {
  olid: 'olid',
  olregion: 'olregion',
  olcity: 'olcity',
  oltsp: 'oltsp',
  olname: 'olname',
  oladd: 'oladd',
  olwratio: 'olwratio',
  olcreated: 'olcreated'
};

exports.Prisma.Tbl_salepersonScalarFieldEnum = {
  spid: 'spid',
  spfullname: 'spfullname',
  spmobile: 'spmobile',
  spcreated: 'spcreated',
  spstatus: 'spstatus'
};

exports.Prisma.Tbl_settingsScalarFieldEnum = {
  setid: 'setid',
  settitle: 'settitle',
  setvalue: 'setvalue'
};

exports.Prisma.Tbl_surveyScalarFieldEnum = {
  svid: 'svid',
  svq: 'svq',
  sva1: 'sva1',
  sva2: 'sva2',
  sva3: 'sva3'
};

exports.Prisma.Tbl_sysuserScalarFieldEnum = {
  sysuid: 'sysuid',
  sysufulln: 'sysufulln',
  sysumobile: 'sysumobile',
  sysuemail: 'sysuemail',
  sysuauth: 'sysuauth',
  sysutype: 'sysutype',
  sysucreated: 'sysucreated'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  tbl_gtrans: 'tbl_gtrans',
  tbl_logs: 'tbl_logs',
  tbl_outlet: 'tbl_outlet',
  tbl_saleperson: 'tbl_saleperson',
  tbl_settings: 'tbl_settings',
  tbl_survey: 'tbl_survey',
  tbl_sysuser: 'tbl_sysuser'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
