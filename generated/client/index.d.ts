
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type tbl_gtransPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "tbl_gtrans"
  objects: {}
  scalars: $Extensions.GetResult<{
    gtid: number
    olcity: string | null
    oltsp: string | null
    olname: string | null
    gcarange: string | null
    gcumobile: string | null
    gcwinitem: string | null
    sa: string | null
    sb: string | null
    sc: string | null
    gstatus: string | null
    gdt: Date
  }, ExtArgs["result"]["tbl_gtrans"]>
  composites: {}
}

/**
 * Model tbl_gtrans
 * 
 */
export type tbl_gtrans = runtime.Types.DefaultSelection<tbl_gtransPayload>
export type tbl_logsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "tbl_logs"
  objects: {}
  scalars: $Extensions.GetResult<{
    logid: number
    logdt: Date | null
    logtype: string | null
    logref: string | null
    logtext: string | null
  }, ExtArgs["result"]["tbl_logs"]>
  composites: {}
}

/**
 * Model tbl_logs
 * 
 */
export type tbl_logs = runtime.Types.DefaultSelection<tbl_logsPayload>
export type tbl_outletPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "tbl_outlet"
  objects: {}
  scalars: $Extensions.GetResult<{
    olid: number
    olregion: string | null
    olcity: string | null
    oltsp: string | null
    olname: string | null
    oladd: string | null
    olwratio: string | null
    olcreated: Date | null
  }, ExtArgs["result"]["tbl_outlet"]>
  composites: {}
}

/**
 * Model tbl_outlet
 * 
 */
export type tbl_outlet = runtime.Types.DefaultSelection<tbl_outletPayload>
export type tbl_salepersonPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "tbl_saleperson"
  objects: {}
  scalars: $Extensions.GetResult<{
    spid: number
    spfullname: string | null
    spmobile: string | null
    spcreated: Date | null
    spstatus: string | null
  }, ExtArgs["result"]["tbl_saleperson"]>
  composites: {}
}

/**
 * Model tbl_saleperson
 * 
 */
export type tbl_saleperson = runtime.Types.DefaultSelection<tbl_salepersonPayload>
export type tbl_settingsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "tbl_settings"
  objects: {}
  scalars: $Extensions.GetResult<{
    setid: number
    settitle: string | null
    setvalue: string | null
  }, ExtArgs["result"]["tbl_settings"]>
  composites: {}
}

/**
 * Model tbl_settings
 * 
 */
export type tbl_settings = runtime.Types.DefaultSelection<tbl_settingsPayload>
export type tbl_surveyPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "tbl_survey"
  objects: {}
  scalars: $Extensions.GetResult<{
    svid: number
    svq: string | null
    sva1: string | null
    sva2: string | null
    sva3: string | null
  }, ExtArgs["result"]["tbl_survey"]>
  composites: {}
}

/**
 * Model tbl_survey
 * 
 */
export type tbl_survey = runtime.Types.DefaultSelection<tbl_surveyPayload>
export type tbl_sysuserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "tbl_sysuser"
  objects: {}
  scalars: $Extensions.GetResult<{
    sysuid: number
    sysufulln: string | null
    sysumobile: string | null
    sysuemail: string | null
    sysuauth: string | null
    sysutype: string | null
    sysucreated: Date | null
  }, ExtArgs["result"]["tbl_sysuser"]>
  composites: {}
}

/**
 * Model tbl_sysuser
 * 
 */
export type tbl_sysuser = runtime.Types.DefaultSelection<tbl_sysuserPayload>
export type UsersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Users"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    name: string | null
    email: string
    password: string
    role: Role
    is_active: boolean
    created_at: Date
    updated_at: Date
  }, ExtArgs["result"]["users"]>
  composites: {}
}

/**
 * Model Users
 * 
 */
export type Users = runtime.Types.DefaultSelection<UsersPayload>

/**
 * Enums
 */

export const Role: {
  User: 'User',
  Admin: 'Admin'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tbl_gtrans
 * const tbl_gtrans = await prisma.tbl_gtrans.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tbl_gtrans
   * const tbl_gtrans = await prisma.tbl_gtrans.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tbl_gtrans`: Exposes CRUD operations for the **tbl_gtrans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_gtrans
    * const tbl_gtrans = await prisma.tbl_gtrans.findMany()
    * ```
    */
  get tbl_gtrans(): Prisma.tbl_gtransDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.tbl_logs`: Exposes CRUD operations for the **tbl_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_logs
    * const tbl_logs = await prisma.tbl_logs.findMany()
    * ```
    */
  get tbl_logs(): Prisma.tbl_logsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.tbl_outlet`: Exposes CRUD operations for the **tbl_outlet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_outlets
    * const tbl_outlets = await prisma.tbl_outlet.findMany()
    * ```
    */
  get tbl_outlet(): Prisma.tbl_outletDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.tbl_saleperson`: Exposes CRUD operations for the **tbl_saleperson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_salepeople
    * const tbl_salepeople = await prisma.tbl_saleperson.findMany()
    * ```
    */
  get tbl_saleperson(): Prisma.tbl_salepersonDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.tbl_settings`: Exposes CRUD operations for the **tbl_settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_settings
    * const tbl_settings = await prisma.tbl_settings.findMany()
    * ```
    */
  get tbl_settings(): Prisma.tbl_settingsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.tbl_survey`: Exposes CRUD operations for the **tbl_survey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_surveys
    * const tbl_surveys = await prisma.tbl_survey.findMany()
    * ```
    */
  get tbl_survey(): Prisma.tbl_surveyDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.tbl_sysuser`: Exposes CRUD operations for the **tbl_sysuser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_sysusers
    * const tbl_sysusers = await prisma.tbl_sysuser.findMany()
    * ```
    */
  get tbl_sysuser(): Prisma.tbl_sysuserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tbl_gtrans: 'tbl_gtrans',
    tbl_logs: 'tbl_logs',
    tbl_outlet: 'tbl_outlet',
    tbl_saleperson: 'tbl_saleperson',
    tbl_settings: 'tbl_settings',
    tbl_survey: 'tbl_survey',
    tbl_sysuser: 'tbl_sysuser',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'tbl_gtrans' | 'tbl_logs' | 'tbl_outlet' | 'tbl_saleperson' | 'tbl_settings' | 'tbl_survey' | 'tbl_sysuser' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      tbl_gtrans: {
        payload: tbl_gtransPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.tbl_gtransFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_gtransPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_gtransFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_gtransPayload>
          }
          findFirst: {
            args: Prisma.tbl_gtransFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_gtransPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_gtransFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_gtransPayload>
          }
          findMany: {
            args: Prisma.tbl_gtransFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_gtransPayload>[]
          }
          create: {
            args: Prisma.tbl_gtransCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_gtransPayload>
          }
          createMany: {
            args: Prisma.tbl_gtransCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_gtransDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_gtransPayload>
          }
          update: {
            args: Prisma.tbl_gtransUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_gtransPayload>
          }
          deleteMany: {
            args: Prisma.tbl_gtransDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_gtransUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_gtransUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_gtransPayload>
          }
          aggregate: {
            args: Prisma.Tbl_gtransAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_gtrans>
          }
          groupBy: {
            args: Prisma.Tbl_gtransGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_gtransGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_gtransCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_gtransCountAggregateOutputType> | number
          }
        }
      }
      tbl_logs: {
        payload: tbl_logsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.tbl_logsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_logsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_logsPayload>
          }
          findFirst: {
            args: Prisma.tbl_logsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_logsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_logsPayload>
          }
          findMany: {
            args: Prisma.tbl_logsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_logsPayload>[]
          }
          create: {
            args: Prisma.tbl_logsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_logsPayload>
          }
          createMany: {
            args: Prisma.tbl_logsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_logsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_logsPayload>
          }
          update: {
            args: Prisma.tbl_logsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_logsPayload>
          }
          deleteMany: {
            args: Prisma.tbl_logsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_logsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_logsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_logsPayload>
          }
          aggregate: {
            args: Prisma.Tbl_logsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_logs>
          }
          groupBy: {
            args: Prisma.Tbl_logsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_logsCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_logsCountAggregateOutputType> | number
          }
        }
      }
      tbl_outlet: {
        payload: tbl_outletPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.tbl_outletFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_outletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_outletFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_outletPayload>
          }
          findFirst: {
            args: Prisma.tbl_outletFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_outletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_outletFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_outletPayload>
          }
          findMany: {
            args: Prisma.tbl_outletFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_outletPayload>[]
          }
          create: {
            args: Prisma.tbl_outletCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_outletPayload>
          }
          createMany: {
            args: Prisma.tbl_outletCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_outletDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_outletPayload>
          }
          update: {
            args: Prisma.tbl_outletUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_outletPayload>
          }
          deleteMany: {
            args: Prisma.tbl_outletDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_outletUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_outletUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_outletPayload>
          }
          aggregate: {
            args: Prisma.Tbl_outletAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_outlet>
          }
          groupBy: {
            args: Prisma.Tbl_outletGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_outletGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_outletCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_outletCountAggregateOutputType> | number
          }
        }
      }
      tbl_saleperson: {
        payload: tbl_salepersonPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.tbl_salepersonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_salepersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_salepersonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_salepersonPayload>
          }
          findFirst: {
            args: Prisma.tbl_salepersonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_salepersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_salepersonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_salepersonPayload>
          }
          findMany: {
            args: Prisma.tbl_salepersonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_salepersonPayload>[]
          }
          create: {
            args: Prisma.tbl_salepersonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_salepersonPayload>
          }
          createMany: {
            args: Prisma.tbl_salepersonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_salepersonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_salepersonPayload>
          }
          update: {
            args: Prisma.tbl_salepersonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_salepersonPayload>
          }
          deleteMany: {
            args: Prisma.tbl_salepersonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_salepersonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_salepersonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_salepersonPayload>
          }
          aggregate: {
            args: Prisma.Tbl_salepersonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_saleperson>
          }
          groupBy: {
            args: Prisma.Tbl_salepersonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_salepersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_salepersonCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_salepersonCountAggregateOutputType> | number
          }
        }
      }
      tbl_settings: {
        payload: tbl_settingsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.tbl_settingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_settingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_settingsPayload>
          }
          findFirst: {
            args: Prisma.tbl_settingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_settingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_settingsPayload>
          }
          findMany: {
            args: Prisma.tbl_settingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_settingsPayload>[]
          }
          create: {
            args: Prisma.tbl_settingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_settingsPayload>
          }
          createMany: {
            args: Prisma.tbl_settingsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_settingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_settingsPayload>
          }
          update: {
            args: Prisma.tbl_settingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_settingsPayload>
          }
          deleteMany: {
            args: Prisma.tbl_settingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_settingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_settingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_settingsPayload>
          }
          aggregate: {
            args: Prisma.Tbl_settingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_settings>
          }
          groupBy: {
            args: Prisma.Tbl_settingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_settingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_settingsCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_settingsCountAggregateOutputType> | number
          }
        }
      }
      tbl_survey: {
        payload: tbl_surveyPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.tbl_surveyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_surveyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_surveyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_surveyPayload>
          }
          findFirst: {
            args: Prisma.tbl_surveyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_surveyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_surveyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_surveyPayload>
          }
          findMany: {
            args: Prisma.tbl_surveyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_surveyPayload>[]
          }
          create: {
            args: Prisma.tbl_surveyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_surveyPayload>
          }
          createMany: {
            args: Prisma.tbl_surveyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_surveyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_surveyPayload>
          }
          update: {
            args: Prisma.tbl_surveyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_surveyPayload>
          }
          deleteMany: {
            args: Prisma.tbl_surveyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_surveyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_surveyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_surveyPayload>
          }
          aggregate: {
            args: Prisma.Tbl_surveyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_survey>
          }
          groupBy: {
            args: Prisma.Tbl_surveyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_surveyGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_surveyCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_surveyCountAggregateOutputType> | number
          }
        }
      }
      tbl_sysuser: {
        payload: tbl_sysuserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.tbl_sysuserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_sysuserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_sysuserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_sysuserPayload>
          }
          findFirst: {
            args: Prisma.tbl_sysuserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_sysuserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_sysuserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_sysuserPayload>
          }
          findMany: {
            args: Prisma.tbl_sysuserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_sysuserPayload>[]
          }
          create: {
            args: Prisma.tbl_sysuserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_sysuserPayload>
          }
          createMany: {
            args: Prisma.tbl_sysuserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_sysuserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_sysuserPayload>
          }
          update: {
            args: Prisma.tbl_sysuserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_sysuserPayload>
          }
          deleteMany: {
            args: Prisma.tbl_sysuserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_sysuserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_sysuserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<tbl_sysuserPayload>
          }
          aggregate: {
            args: Prisma.Tbl_sysuserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_sysuser>
          }
          groupBy: {
            args: Prisma.Tbl_sysuserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_sysuserGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_sysuserCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_sysuserCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: UsersPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model tbl_gtrans
   */


  export type AggregateTbl_gtrans = {
    _count: Tbl_gtransCountAggregateOutputType | null
    _avg: Tbl_gtransAvgAggregateOutputType | null
    _sum: Tbl_gtransSumAggregateOutputType | null
    _min: Tbl_gtransMinAggregateOutputType | null
    _max: Tbl_gtransMaxAggregateOutputType | null
  }

  export type Tbl_gtransAvgAggregateOutputType = {
    gtid: number | null
  }

  export type Tbl_gtransSumAggregateOutputType = {
    gtid: number | null
  }

  export type Tbl_gtransMinAggregateOutputType = {
    gtid: number | null
    olcity: string | null
    oltsp: string | null
    olname: string | null
    gcarange: string | null
    gcumobile: string | null
    gcwinitem: string | null
    sa: string | null
    sb: string | null
    sc: string | null
    gstatus: string | null
    gdt: Date | null
  }

  export type Tbl_gtransMaxAggregateOutputType = {
    gtid: number | null
    olcity: string | null
    oltsp: string | null
    olname: string | null
    gcarange: string | null
    gcumobile: string | null
    gcwinitem: string | null
    sa: string | null
    sb: string | null
    sc: string | null
    gstatus: string | null
    gdt: Date | null
  }

  export type Tbl_gtransCountAggregateOutputType = {
    gtid: number
    olcity: number
    oltsp: number
    olname: number
    gcarange: number
    gcumobile: number
    gcwinitem: number
    sa: number
    sb: number
    sc: number
    gstatus: number
    gdt: number
    _all: number
  }


  export type Tbl_gtransAvgAggregateInputType = {
    gtid?: true
  }

  export type Tbl_gtransSumAggregateInputType = {
    gtid?: true
  }

  export type Tbl_gtransMinAggregateInputType = {
    gtid?: true
    olcity?: true
    oltsp?: true
    olname?: true
    gcarange?: true
    gcumobile?: true
    gcwinitem?: true
    sa?: true
    sb?: true
    sc?: true
    gstatus?: true
    gdt?: true
  }

  export type Tbl_gtransMaxAggregateInputType = {
    gtid?: true
    olcity?: true
    oltsp?: true
    olname?: true
    gcarange?: true
    gcumobile?: true
    gcwinitem?: true
    sa?: true
    sb?: true
    sc?: true
    gstatus?: true
    gdt?: true
  }

  export type Tbl_gtransCountAggregateInputType = {
    gtid?: true
    olcity?: true
    oltsp?: true
    olname?: true
    gcarange?: true
    gcumobile?: true
    gcwinitem?: true
    sa?: true
    sb?: true
    sc?: true
    gstatus?: true
    gdt?: true
    _all?: true
  }

  export type Tbl_gtransAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_gtrans to aggregate.
     */
    where?: tbl_gtransWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_gtrans to fetch.
     */
    orderBy?: Enumerable<tbl_gtransOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_gtransWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_gtrans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_gtrans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_gtrans
    **/
    _count?: true | Tbl_gtransCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_gtransAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_gtransSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_gtransMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_gtransMaxAggregateInputType
  }

  export type GetTbl_gtransAggregateType<T extends Tbl_gtransAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_gtrans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_gtrans[P]>
      : GetScalarType<T[P], AggregateTbl_gtrans[P]>
  }




  export type Tbl_gtransGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: tbl_gtransWhereInput
    orderBy?: Enumerable<tbl_gtransOrderByWithAggregationInput>
    by: Tbl_gtransScalarFieldEnum[]
    having?: tbl_gtransScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_gtransCountAggregateInputType | true
    _avg?: Tbl_gtransAvgAggregateInputType
    _sum?: Tbl_gtransSumAggregateInputType
    _min?: Tbl_gtransMinAggregateInputType
    _max?: Tbl_gtransMaxAggregateInputType
  }


  export type Tbl_gtransGroupByOutputType = {
    gtid: number
    olcity: string | null
    oltsp: string | null
    olname: string | null
    gcarange: string | null
    gcumobile: string | null
    gcwinitem: string | null
    sa: string | null
    sb: string | null
    sc: string | null
    gstatus: string | null
    gdt: Date
    _count: Tbl_gtransCountAggregateOutputType | null
    _avg: Tbl_gtransAvgAggregateOutputType | null
    _sum: Tbl_gtransSumAggregateOutputType | null
    _min: Tbl_gtransMinAggregateOutputType | null
    _max: Tbl_gtransMaxAggregateOutputType | null
  }

  type GetTbl_gtransGroupByPayload<T extends Tbl_gtransGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Tbl_gtransGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_gtransGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_gtransGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_gtransGroupByOutputType[P]>
        }
      >
    >


  export type tbl_gtransSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gtid?: boolean
    olcity?: boolean
    oltsp?: boolean
    olname?: boolean
    gcarange?: boolean
    gcumobile?: boolean
    gcwinitem?: boolean
    sa?: boolean
    sb?: boolean
    sc?: boolean
    gstatus?: boolean
    gdt?: boolean
  }, ExtArgs["result"]["tbl_gtrans"]>

  export type tbl_gtransSelectScalar = {
    gtid?: boolean
    olcity?: boolean
    oltsp?: boolean
    olname?: boolean
    gcarange?: boolean
    gcumobile?: boolean
    gcwinitem?: boolean
    sa?: boolean
    sb?: boolean
    sc?: boolean
    gstatus?: boolean
    gdt?: boolean
  }


  type tbl_gtransGetPayload<S extends boolean | null | undefined | tbl_gtransArgs> = $Types.GetResult<tbl_gtransPayload, S>

  type tbl_gtransCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<tbl_gtransFindManyArgs, 'select' | 'include'> & {
      select?: Tbl_gtransCountAggregateInputType | true
    }

  export interface tbl_gtransDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_gtrans'], meta: { name: 'tbl_gtrans' } }
    /**
     * Find zero or one Tbl_gtrans that matches the filter.
     * @param {tbl_gtransFindUniqueArgs} args - Arguments to find a Tbl_gtrans
     * @example
     * // Get one Tbl_gtrans
     * const tbl_gtrans = await prisma.tbl_gtrans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_gtransFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tbl_gtransFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tbl_gtrans'> extends True ? Prisma__tbl_gtransClient<$Types.GetResult<tbl_gtransPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__tbl_gtransClient<$Types.GetResult<tbl_gtransPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Tbl_gtrans that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_gtransFindUniqueOrThrowArgs} args - Arguments to find a Tbl_gtrans
     * @example
     * // Get one Tbl_gtrans
     * const tbl_gtrans = await prisma.tbl_gtrans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_gtransFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_gtransFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_gtransClient<$Types.GetResult<tbl_gtransPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Tbl_gtrans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_gtransFindFirstArgs} args - Arguments to find a Tbl_gtrans
     * @example
     * // Get one Tbl_gtrans
     * const tbl_gtrans = await prisma.tbl_gtrans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_gtransFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tbl_gtransFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tbl_gtrans'> extends True ? Prisma__tbl_gtransClient<$Types.GetResult<tbl_gtransPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__tbl_gtransClient<$Types.GetResult<tbl_gtransPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Tbl_gtrans that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_gtransFindFirstOrThrowArgs} args - Arguments to find a Tbl_gtrans
     * @example
     * // Get one Tbl_gtrans
     * const tbl_gtrans = await prisma.tbl_gtrans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_gtransFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_gtransFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_gtransClient<$Types.GetResult<tbl_gtransPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tbl_gtrans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_gtransFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_gtrans
     * const tbl_gtrans = await prisma.tbl_gtrans.findMany()
     * 
     * // Get first 10 Tbl_gtrans
     * const tbl_gtrans = await prisma.tbl_gtrans.findMany({ take: 10 })
     * 
     * // Only select the `gtid`
     * const tbl_gtransWithGtidOnly = await prisma.tbl_gtrans.findMany({ select: { gtid: true } })
     * 
    **/
    findMany<T extends tbl_gtransFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_gtransFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<tbl_gtransPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Tbl_gtrans.
     * @param {tbl_gtransCreateArgs} args - Arguments to create a Tbl_gtrans.
     * @example
     * // Create one Tbl_gtrans
     * const Tbl_gtrans = await prisma.tbl_gtrans.create({
     *   data: {
     *     // ... data to create a Tbl_gtrans
     *   }
     * })
     * 
    **/
    create<T extends tbl_gtransCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_gtransCreateArgs<ExtArgs>>
    ): Prisma__tbl_gtransClient<$Types.GetResult<tbl_gtransPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tbl_gtrans.
     *     @param {tbl_gtransCreateManyArgs} args - Arguments to create many Tbl_gtrans.
     *     @example
     *     // Create many Tbl_gtrans
     *     const tbl_gtrans = await prisma.tbl_gtrans.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_gtransCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_gtransCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_gtrans.
     * @param {tbl_gtransDeleteArgs} args - Arguments to delete one Tbl_gtrans.
     * @example
     * // Delete one Tbl_gtrans
     * const Tbl_gtrans = await prisma.tbl_gtrans.delete({
     *   where: {
     *     // ... filter to delete one Tbl_gtrans
     *   }
     * })
     * 
    **/
    delete<T extends tbl_gtransDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_gtransDeleteArgs<ExtArgs>>
    ): Prisma__tbl_gtransClient<$Types.GetResult<tbl_gtransPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Tbl_gtrans.
     * @param {tbl_gtransUpdateArgs} args - Arguments to update one Tbl_gtrans.
     * @example
     * // Update one Tbl_gtrans
     * const tbl_gtrans = await prisma.tbl_gtrans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_gtransUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_gtransUpdateArgs<ExtArgs>>
    ): Prisma__tbl_gtransClient<$Types.GetResult<tbl_gtransPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_gtrans.
     * @param {tbl_gtransDeleteManyArgs} args - Arguments to filter Tbl_gtrans to delete.
     * @example
     * // Delete a few Tbl_gtrans
     * const { count } = await prisma.tbl_gtrans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_gtransDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_gtransDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_gtrans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_gtransUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_gtrans
     * const tbl_gtrans = await prisma.tbl_gtrans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_gtransUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_gtransUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_gtrans.
     * @param {tbl_gtransUpsertArgs} args - Arguments to update or create a Tbl_gtrans.
     * @example
     * // Update or create a Tbl_gtrans
     * const tbl_gtrans = await prisma.tbl_gtrans.upsert({
     *   create: {
     *     // ... data to create a Tbl_gtrans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_gtrans we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_gtransUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_gtransUpsertArgs<ExtArgs>>
    ): Prisma__tbl_gtransClient<$Types.GetResult<tbl_gtransPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tbl_gtrans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_gtransCountArgs} args - Arguments to filter Tbl_gtrans to count.
     * @example
     * // Count the number of Tbl_gtrans
     * const count = await prisma.tbl_gtrans.count({
     *   where: {
     *     // ... the filter for the Tbl_gtrans we want to count
     *   }
     * })
    **/
    count<T extends tbl_gtransCountArgs>(
      args?: Subset<T, tbl_gtransCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_gtransCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_gtrans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_gtransAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_gtransAggregateArgs>(args: Subset<T, Tbl_gtransAggregateArgs>): Prisma.PrismaPromise<GetTbl_gtransAggregateType<T>>

    /**
     * Group by Tbl_gtrans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_gtransGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tbl_gtransGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tbl_gtransGroupByArgs['orderBy'] }
        : { orderBy?: Tbl_gtransGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tbl_gtransGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_gtransGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_gtrans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tbl_gtransClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tbl_gtrans base type for findUnique actions
   */
  export type tbl_gtransFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_gtrans
     */
    select?: tbl_gtransSelect<ExtArgs> | null
    /**
     * Filter, which tbl_gtrans to fetch.
     */
    where: tbl_gtransWhereUniqueInput
  }

  /**
   * tbl_gtrans findUnique
   */
  export interface tbl_gtransFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_gtransFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_gtrans findUniqueOrThrow
   */
  export type tbl_gtransFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_gtrans
     */
    select?: tbl_gtransSelect<ExtArgs> | null
    /**
     * Filter, which tbl_gtrans to fetch.
     */
    where: tbl_gtransWhereUniqueInput
  }


  /**
   * tbl_gtrans base type for findFirst actions
   */
  export type tbl_gtransFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_gtrans
     */
    select?: tbl_gtransSelect<ExtArgs> | null
    /**
     * Filter, which tbl_gtrans to fetch.
     */
    where?: tbl_gtransWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_gtrans to fetch.
     */
    orderBy?: Enumerable<tbl_gtransOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_gtrans.
     */
    cursor?: tbl_gtransWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_gtrans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_gtrans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_gtrans.
     */
    distinct?: Enumerable<Tbl_gtransScalarFieldEnum>
  }

  /**
   * tbl_gtrans findFirst
   */
  export interface tbl_gtransFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_gtransFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_gtrans findFirstOrThrow
   */
  export type tbl_gtransFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_gtrans
     */
    select?: tbl_gtransSelect<ExtArgs> | null
    /**
     * Filter, which tbl_gtrans to fetch.
     */
    where?: tbl_gtransWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_gtrans to fetch.
     */
    orderBy?: Enumerable<tbl_gtransOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_gtrans.
     */
    cursor?: tbl_gtransWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_gtrans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_gtrans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_gtrans.
     */
    distinct?: Enumerable<Tbl_gtransScalarFieldEnum>
  }


  /**
   * tbl_gtrans findMany
   */
  export type tbl_gtransFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_gtrans
     */
    select?: tbl_gtransSelect<ExtArgs> | null
    /**
     * Filter, which tbl_gtrans to fetch.
     */
    where?: tbl_gtransWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_gtrans to fetch.
     */
    orderBy?: Enumerable<tbl_gtransOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_gtrans.
     */
    cursor?: tbl_gtransWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_gtrans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_gtrans.
     */
    skip?: number
    distinct?: Enumerable<Tbl_gtransScalarFieldEnum>
  }


  /**
   * tbl_gtrans create
   */
  export type tbl_gtransCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_gtrans
     */
    select?: tbl_gtransSelect<ExtArgs> | null
    /**
     * The data needed to create a tbl_gtrans.
     */
    data?: XOR<tbl_gtransCreateInput, tbl_gtransUncheckedCreateInput>
  }


  /**
   * tbl_gtrans createMany
   */
  export type tbl_gtransCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_gtrans.
     */
    data: Enumerable<tbl_gtransCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tbl_gtrans update
   */
  export type tbl_gtransUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_gtrans
     */
    select?: tbl_gtransSelect<ExtArgs> | null
    /**
     * The data needed to update a tbl_gtrans.
     */
    data: XOR<tbl_gtransUpdateInput, tbl_gtransUncheckedUpdateInput>
    /**
     * Choose, which tbl_gtrans to update.
     */
    where: tbl_gtransWhereUniqueInput
  }


  /**
   * tbl_gtrans updateMany
   */
  export type tbl_gtransUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_gtrans.
     */
    data: XOR<tbl_gtransUpdateManyMutationInput, tbl_gtransUncheckedUpdateManyInput>
    /**
     * Filter which tbl_gtrans to update
     */
    where?: tbl_gtransWhereInput
  }


  /**
   * tbl_gtrans upsert
   */
  export type tbl_gtransUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_gtrans
     */
    select?: tbl_gtransSelect<ExtArgs> | null
    /**
     * The filter to search for the tbl_gtrans to update in case it exists.
     */
    where: tbl_gtransWhereUniqueInput
    /**
     * In case the tbl_gtrans found by the `where` argument doesn't exist, create a new tbl_gtrans with this data.
     */
    create: XOR<tbl_gtransCreateInput, tbl_gtransUncheckedCreateInput>
    /**
     * In case the tbl_gtrans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_gtransUpdateInput, tbl_gtransUncheckedUpdateInput>
  }


  /**
   * tbl_gtrans delete
   */
  export type tbl_gtransDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_gtrans
     */
    select?: tbl_gtransSelect<ExtArgs> | null
    /**
     * Filter which tbl_gtrans to delete.
     */
    where: tbl_gtransWhereUniqueInput
  }


  /**
   * tbl_gtrans deleteMany
   */
  export type tbl_gtransDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_gtrans to delete
     */
    where?: tbl_gtransWhereInput
  }


  /**
   * tbl_gtrans without action
   */
  export type tbl_gtransArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_gtrans
     */
    select?: tbl_gtransSelect<ExtArgs> | null
  }



  /**
   * Model tbl_logs
   */


  export type AggregateTbl_logs = {
    _count: Tbl_logsCountAggregateOutputType | null
    _avg: Tbl_logsAvgAggregateOutputType | null
    _sum: Tbl_logsSumAggregateOutputType | null
    _min: Tbl_logsMinAggregateOutputType | null
    _max: Tbl_logsMaxAggregateOutputType | null
  }

  export type Tbl_logsAvgAggregateOutputType = {
    logid: number | null
  }

  export type Tbl_logsSumAggregateOutputType = {
    logid: number | null
  }

  export type Tbl_logsMinAggregateOutputType = {
    logid: number | null
    logdt: Date | null
    logtype: string | null
    logref: string | null
    logtext: string | null
  }

  export type Tbl_logsMaxAggregateOutputType = {
    logid: number | null
    logdt: Date | null
    logtype: string | null
    logref: string | null
    logtext: string | null
  }

  export type Tbl_logsCountAggregateOutputType = {
    logid: number
    logdt: number
    logtype: number
    logref: number
    logtext: number
    _all: number
  }


  export type Tbl_logsAvgAggregateInputType = {
    logid?: true
  }

  export type Tbl_logsSumAggregateInputType = {
    logid?: true
  }

  export type Tbl_logsMinAggregateInputType = {
    logid?: true
    logdt?: true
    logtype?: true
    logref?: true
    logtext?: true
  }

  export type Tbl_logsMaxAggregateInputType = {
    logid?: true
    logdt?: true
    logtype?: true
    logref?: true
    logtext?: true
  }

  export type Tbl_logsCountAggregateInputType = {
    logid?: true
    logdt?: true
    logtype?: true
    logref?: true
    logtext?: true
    _all?: true
  }

  export type Tbl_logsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_logs to aggregate.
     */
    where?: tbl_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_logs to fetch.
     */
    orderBy?: Enumerable<tbl_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_logs
    **/
    _count?: true | Tbl_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_logsMaxAggregateInputType
  }

  export type GetTbl_logsAggregateType<T extends Tbl_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_logs[P]>
      : GetScalarType<T[P], AggregateTbl_logs[P]>
  }




  export type Tbl_logsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: tbl_logsWhereInput
    orderBy?: Enumerable<tbl_logsOrderByWithAggregationInput>
    by: Tbl_logsScalarFieldEnum[]
    having?: tbl_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_logsCountAggregateInputType | true
    _avg?: Tbl_logsAvgAggregateInputType
    _sum?: Tbl_logsSumAggregateInputType
    _min?: Tbl_logsMinAggregateInputType
    _max?: Tbl_logsMaxAggregateInputType
  }


  export type Tbl_logsGroupByOutputType = {
    logid: number
    logdt: Date | null
    logtype: string | null
    logref: string | null
    logtext: string | null
    _count: Tbl_logsCountAggregateOutputType | null
    _avg: Tbl_logsAvgAggregateOutputType | null
    _sum: Tbl_logsSumAggregateOutputType | null
    _min: Tbl_logsMinAggregateOutputType | null
    _max: Tbl_logsMaxAggregateOutputType | null
  }

  type GetTbl_logsGroupByPayload<T extends Tbl_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Tbl_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_logsGroupByOutputType[P]>
        }
      >
    >


  export type tbl_logsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logid?: boolean
    logdt?: boolean
    logtype?: boolean
    logref?: boolean
    logtext?: boolean
  }, ExtArgs["result"]["tbl_logs"]>

  export type tbl_logsSelectScalar = {
    logid?: boolean
    logdt?: boolean
    logtype?: boolean
    logref?: boolean
    logtext?: boolean
  }


  type tbl_logsGetPayload<S extends boolean | null | undefined | tbl_logsArgs> = $Types.GetResult<tbl_logsPayload, S>

  type tbl_logsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<tbl_logsFindManyArgs, 'select' | 'include'> & {
      select?: Tbl_logsCountAggregateInputType | true
    }

  export interface tbl_logsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_logs'], meta: { name: 'tbl_logs' } }
    /**
     * Find zero or one Tbl_logs that matches the filter.
     * @param {tbl_logsFindUniqueArgs} args - Arguments to find a Tbl_logs
     * @example
     * // Get one Tbl_logs
     * const tbl_logs = await prisma.tbl_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_logsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tbl_logsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tbl_logs'> extends True ? Prisma__tbl_logsClient<$Types.GetResult<tbl_logsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__tbl_logsClient<$Types.GetResult<tbl_logsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Tbl_logs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_logsFindUniqueOrThrowArgs} args - Arguments to find a Tbl_logs
     * @example
     * // Get one Tbl_logs
     * const tbl_logs = await prisma.tbl_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_logsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_logsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_logsClient<$Types.GetResult<tbl_logsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Tbl_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_logsFindFirstArgs} args - Arguments to find a Tbl_logs
     * @example
     * // Get one Tbl_logs
     * const tbl_logs = await prisma.tbl_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_logsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tbl_logsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tbl_logs'> extends True ? Prisma__tbl_logsClient<$Types.GetResult<tbl_logsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__tbl_logsClient<$Types.GetResult<tbl_logsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Tbl_logs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_logsFindFirstOrThrowArgs} args - Arguments to find a Tbl_logs
     * @example
     * // Get one Tbl_logs
     * const tbl_logs = await prisma.tbl_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_logsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_logsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_logsClient<$Types.GetResult<tbl_logsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tbl_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_logsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_logs
     * const tbl_logs = await prisma.tbl_logs.findMany()
     * 
     * // Get first 10 Tbl_logs
     * const tbl_logs = await prisma.tbl_logs.findMany({ take: 10 })
     * 
     * // Only select the `logid`
     * const tbl_logsWithLogidOnly = await prisma.tbl_logs.findMany({ select: { logid: true } })
     * 
    **/
    findMany<T extends tbl_logsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_logsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<tbl_logsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Tbl_logs.
     * @param {tbl_logsCreateArgs} args - Arguments to create a Tbl_logs.
     * @example
     * // Create one Tbl_logs
     * const Tbl_logs = await prisma.tbl_logs.create({
     *   data: {
     *     // ... data to create a Tbl_logs
     *   }
     * })
     * 
    **/
    create<T extends tbl_logsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_logsCreateArgs<ExtArgs>>
    ): Prisma__tbl_logsClient<$Types.GetResult<tbl_logsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tbl_logs.
     *     @param {tbl_logsCreateManyArgs} args - Arguments to create many Tbl_logs.
     *     @example
     *     // Create many Tbl_logs
     *     const tbl_logs = await prisma.tbl_logs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_logsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_logsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_logs.
     * @param {tbl_logsDeleteArgs} args - Arguments to delete one Tbl_logs.
     * @example
     * // Delete one Tbl_logs
     * const Tbl_logs = await prisma.tbl_logs.delete({
     *   where: {
     *     // ... filter to delete one Tbl_logs
     *   }
     * })
     * 
    **/
    delete<T extends tbl_logsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_logsDeleteArgs<ExtArgs>>
    ): Prisma__tbl_logsClient<$Types.GetResult<tbl_logsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Tbl_logs.
     * @param {tbl_logsUpdateArgs} args - Arguments to update one Tbl_logs.
     * @example
     * // Update one Tbl_logs
     * const tbl_logs = await prisma.tbl_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_logsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_logsUpdateArgs<ExtArgs>>
    ): Prisma__tbl_logsClient<$Types.GetResult<tbl_logsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_logs.
     * @param {tbl_logsDeleteManyArgs} args - Arguments to filter Tbl_logs to delete.
     * @example
     * // Delete a few Tbl_logs
     * const { count } = await prisma.tbl_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_logsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_logsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_logs
     * const tbl_logs = await prisma.tbl_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_logsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_logsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_logs.
     * @param {tbl_logsUpsertArgs} args - Arguments to update or create a Tbl_logs.
     * @example
     * // Update or create a Tbl_logs
     * const tbl_logs = await prisma.tbl_logs.upsert({
     *   create: {
     *     // ... data to create a Tbl_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_logs we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_logsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_logsUpsertArgs<ExtArgs>>
    ): Prisma__tbl_logsClient<$Types.GetResult<tbl_logsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tbl_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_logsCountArgs} args - Arguments to filter Tbl_logs to count.
     * @example
     * // Count the number of Tbl_logs
     * const count = await prisma.tbl_logs.count({
     *   where: {
     *     // ... the filter for the Tbl_logs we want to count
     *   }
     * })
    **/
    count<T extends tbl_logsCountArgs>(
      args?: Subset<T, tbl_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_logsAggregateArgs>(args: Subset<T, Tbl_logsAggregateArgs>): Prisma.PrismaPromise<GetTbl_logsAggregateType<T>>

    /**
     * Group by Tbl_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tbl_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tbl_logsGroupByArgs['orderBy'] }
        : { orderBy?: Tbl_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tbl_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tbl_logsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tbl_logs base type for findUnique actions
   */
  export type tbl_logsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_logs
     */
    select?: tbl_logsSelect<ExtArgs> | null
    /**
     * Filter, which tbl_logs to fetch.
     */
    where: tbl_logsWhereUniqueInput
  }

  /**
   * tbl_logs findUnique
   */
  export interface tbl_logsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_logsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_logs findUniqueOrThrow
   */
  export type tbl_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_logs
     */
    select?: tbl_logsSelect<ExtArgs> | null
    /**
     * Filter, which tbl_logs to fetch.
     */
    where: tbl_logsWhereUniqueInput
  }


  /**
   * tbl_logs base type for findFirst actions
   */
  export type tbl_logsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_logs
     */
    select?: tbl_logsSelect<ExtArgs> | null
    /**
     * Filter, which tbl_logs to fetch.
     */
    where?: tbl_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_logs to fetch.
     */
    orderBy?: Enumerable<tbl_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_logs.
     */
    cursor?: tbl_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_logs.
     */
    distinct?: Enumerable<Tbl_logsScalarFieldEnum>
  }

  /**
   * tbl_logs findFirst
   */
  export interface tbl_logsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_logsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_logs findFirstOrThrow
   */
  export type tbl_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_logs
     */
    select?: tbl_logsSelect<ExtArgs> | null
    /**
     * Filter, which tbl_logs to fetch.
     */
    where?: tbl_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_logs to fetch.
     */
    orderBy?: Enumerable<tbl_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_logs.
     */
    cursor?: tbl_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_logs.
     */
    distinct?: Enumerable<Tbl_logsScalarFieldEnum>
  }


  /**
   * tbl_logs findMany
   */
  export type tbl_logsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_logs
     */
    select?: tbl_logsSelect<ExtArgs> | null
    /**
     * Filter, which tbl_logs to fetch.
     */
    where?: tbl_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_logs to fetch.
     */
    orderBy?: Enumerable<tbl_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_logs.
     */
    cursor?: tbl_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_logs.
     */
    skip?: number
    distinct?: Enumerable<Tbl_logsScalarFieldEnum>
  }


  /**
   * tbl_logs create
   */
  export type tbl_logsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_logs
     */
    select?: tbl_logsSelect<ExtArgs> | null
    /**
     * The data needed to create a tbl_logs.
     */
    data?: XOR<tbl_logsCreateInput, tbl_logsUncheckedCreateInput>
  }


  /**
   * tbl_logs createMany
   */
  export type tbl_logsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_logs.
     */
    data: Enumerable<tbl_logsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tbl_logs update
   */
  export type tbl_logsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_logs
     */
    select?: tbl_logsSelect<ExtArgs> | null
    /**
     * The data needed to update a tbl_logs.
     */
    data: XOR<tbl_logsUpdateInput, tbl_logsUncheckedUpdateInput>
    /**
     * Choose, which tbl_logs to update.
     */
    where: tbl_logsWhereUniqueInput
  }


  /**
   * tbl_logs updateMany
   */
  export type tbl_logsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_logs.
     */
    data: XOR<tbl_logsUpdateManyMutationInput, tbl_logsUncheckedUpdateManyInput>
    /**
     * Filter which tbl_logs to update
     */
    where?: tbl_logsWhereInput
  }


  /**
   * tbl_logs upsert
   */
  export type tbl_logsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_logs
     */
    select?: tbl_logsSelect<ExtArgs> | null
    /**
     * The filter to search for the tbl_logs to update in case it exists.
     */
    where: tbl_logsWhereUniqueInput
    /**
     * In case the tbl_logs found by the `where` argument doesn't exist, create a new tbl_logs with this data.
     */
    create: XOR<tbl_logsCreateInput, tbl_logsUncheckedCreateInput>
    /**
     * In case the tbl_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_logsUpdateInput, tbl_logsUncheckedUpdateInput>
  }


  /**
   * tbl_logs delete
   */
  export type tbl_logsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_logs
     */
    select?: tbl_logsSelect<ExtArgs> | null
    /**
     * Filter which tbl_logs to delete.
     */
    where: tbl_logsWhereUniqueInput
  }


  /**
   * tbl_logs deleteMany
   */
  export type tbl_logsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_logs to delete
     */
    where?: tbl_logsWhereInput
  }


  /**
   * tbl_logs without action
   */
  export type tbl_logsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_logs
     */
    select?: tbl_logsSelect<ExtArgs> | null
  }



  /**
   * Model tbl_outlet
   */


  export type AggregateTbl_outlet = {
    _count: Tbl_outletCountAggregateOutputType | null
    _avg: Tbl_outletAvgAggregateOutputType | null
    _sum: Tbl_outletSumAggregateOutputType | null
    _min: Tbl_outletMinAggregateOutputType | null
    _max: Tbl_outletMaxAggregateOutputType | null
  }

  export type Tbl_outletAvgAggregateOutputType = {
    olid: number | null
  }

  export type Tbl_outletSumAggregateOutputType = {
    olid: number | null
  }

  export type Tbl_outletMinAggregateOutputType = {
    olid: number | null
    olregion: string | null
    olcity: string | null
    oltsp: string | null
    olname: string | null
    oladd: string | null
    olwratio: string | null
    olcreated: Date | null
  }

  export type Tbl_outletMaxAggregateOutputType = {
    olid: number | null
    olregion: string | null
    olcity: string | null
    oltsp: string | null
    olname: string | null
    oladd: string | null
    olwratio: string | null
    olcreated: Date | null
  }

  export type Tbl_outletCountAggregateOutputType = {
    olid: number
    olregion: number
    olcity: number
    oltsp: number
    olname: number
    oladd: number
    olwratio: number
    olcreated: number
    _all: number
  }


  export type Tbl_outletAvgAggregateInputType = {
    olid?: true
  }

  export type Tbl_outletSumAggregateInputType = {
    olid?: true
  }

  export type Tbl_outletMinAggregateInputType = {
    olid?: true
    olregion?: true
    olcity?: true
    oltsp?: true
    olname?: true
    oladd?: true
    olwratio?: true
    olcreated?: true
  }

  export type Tbl_outletMaxAggregateInputType = {
    olid?: true
    olregion?: true
    olcity?: true
    oltsp?: true
    olname?: true
    oladd?: true
    olwratio?: true
    olcreated?: true
  }

  export type Tbl_outletCountAggregateInputType = {
    olid?: true
    olregion?: true
    olcity?: true
    oltsp?: true
    olname?: true
    oladd?: true
    olwratio?: true
    olcreated?: true
    _all?: true
  }

  export type Tbl_outletAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_outlet to aggregate.
     */
    where?: tbl_outletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_outlets to fetch.
     */
    orderBy?: Enumerable<tbl_outletOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_outletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_outlets
    **/
    _count?: true | Tbl_outletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_outletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_outletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_outletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_outletMaxAggregateInputType
  }

  export type GetTbl_outletAggregateType<T extends Tbl_outletAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_outlet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_outlet[P]>
      : GetScalarType<T[P], AggregateTbl_outlet[P]>
  }




  export type Tbl_outletGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: tbl_outletWhereInput
    orderBy?: Enumerable<tbl_outletOrderByWithAggregationInput>
    by: Tbl_outletScalarFieldEnum[]
    having?: tbl_outletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_outletCountAggregateInputType | true
    _avg?: Tbl_outletAvgAggregateInputType
    _sum?: Tbl_outletSumAggregateInputType
    _min?: Tbl_outletMinAggregateInputType
    _max?: Tbl_outletMaxAggregateInputType
  }


  export type Tbl_outletGroupByOutputType = {
    olid: number
    olregion: string | null
    olcity: string | null
    oltsp: string | null
    olname: string | null
    oladd: string | null
    olwratio: string | null
    olcreated: Date | null
    _count: Tbl_outletCountAggregateOutputType | null
    _avg: Tbl_outletAvgAggregateOutputType | null
    _sum: Tbl_outletSumAggregateOutputType | null
    _min: Tbl_outletMinAggregateOutputType | null
    _max: Tbl_outletMaxAggregateOutputType | null
  }

  type GetTbl_outletGroupByPayload<T extends Tbl_outletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Tbl_outletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_outletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_outletGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_outletGroupByOutputType[P]>
        }
      >
    >


  export type tbl_outletSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    olid?: boolean
    olregion?: boolean
    olcity?: boolean
    oltsp?: boolean
    olname?: boolean
    oladd?: boolean
    olwratio?: boolean
    olcreated?: boolean
  }, ExtArgs["result"]["tbl_outlet"]>

  export type tbl_outletSelectScalar = {
    olid?: boolean
    olregion?: boolean
    olcity?: boolean
    oltsp?: boolean
    olname?: boolean
    oladd?: boolean
    olwratio?: boolean
    olcreated?: boolean
  }


  type tbl_outletGetPayload<S extends boolean | null | undefined | tbl_outletArgs> = $Types.GetResult<tbl_outletPayload, S>

  type tbl_outletCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<tbl_outletFindManyArgs, 'select' | 'include'> & {
      select?: Tbl_outletCountAggregateInputType | true
    }

  export interface tbl_outletDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_outlet'], meta: { name: 'tbl_outlet' } }
    /**
     * Find zero or one Tbl_outlet that matches the filter.
     * @param {tbl_outletFindUniqueArgs} args - Arguments to find a Tbl_outlet
     * @example
     * // Get one Tbl_outlet
     * const tbl_outlet = await prisma.tbl_outlet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_outletFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tbl_outletFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tbl_outlet'> extends True ? Prisma__tbl_outletClient<$Types.GetResult<tbl_outletPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__tbl_outletClient<$Types.GetResult<tbl_outletPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Tbl_outlet that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_outletFindUniqueOrThrowArgs} args - Arguments to find a Tbl_outlet
     * @example
     * // Get one Tbl_outlet
     * const tbl_outlet = await prisma.tbl_outlet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_outletFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_outletFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_outletClient<$Types.GetResult<tbl_outletPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Tbl_outlet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_outletFindFirstArgs} args - Arguments to find a Tbl_outlet
     * @example
     * // Get one Tbl_outlet
     * const tbl_outlet = await prisma.tbl_outlet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_outletFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tbl_outletFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tbl_outlet'> extends True ? Prisma__tbl_outletClient<$Types.GetResult<tbl_outletPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__tbl_outletClient<$Types.GetResult<tbl_outletPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Tbl_outlet that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_outletFindFirstOrThrowArgs} args - Arguments to find a Tbl_outlet
     * @example
     * // Get one Tbl_outlet
     * const tbl_outlet = await prisma.tbl_outlet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_outletFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_outletFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_outletClient<$Types.GetResult<tbl_outletPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tbl_outlets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_outletFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_outlets
     * const tbl_outlets = await prisma.tbl_outlet.findMany()
     * 
     * // Get first 10 Tbl_outlets
     * const tbl_outlets = await prisma.tbl_outlet.findMany({ take: 10 })
     * 
     * // Only select the `olid`
     * const tbl_outletWithOlidOnly = await prisma.tbl_outlet.findMany({ select: { olid: true } })
     * 
    **/
    findMany<T extends tbl_outletFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_outletFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<tbl_outletPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Tbl_outlet.
     * @param {tbl_outletCreateArgs} args - Arguments to create a Tbl_outlet.
     * @example
     * // Create one Tbl_outlet
     * const Tbl_outlet = await prisma.tbl_outlet.create({
     *   data: {
     *     // ... data to create a Tbl_outlet
     *   }
     * })
     * 
    **/
    create<T extends tbl_outletCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_outletCreateArgs<ExtArgs>>
    ): Prisma__tbl_outletClient<$Types.GetResult<tbl_outletPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tbl_outlets.
     *     @param {tbl_outletCreateManyArgs} args - Arguments to create many Tbl_outlets.
     *     @example
     *     // Create many Tbl_outlets
     *     const tbl_outlet = await prisma.tbl_outlet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_outletCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_outletCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_outlet.
     * @param {tbl_outletDeleteArgs} args - Arguments to delete one Tbl_outlet.
     * @example
     * // Delete one Tbl_outlet
     * const Tbl_outlet = await prisma.tbl_outlet.delete({
     *   where: {
     *     // ... filter to delete one Tbl_outlet
     *   }
     * })
     * 
    **/
    delete<T extends tbl_outletDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_outletDeleteArgs<ExtArgs>>
    ): Prisma__tbl_outletClient<$Types.GetResult<tbl_outletPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Tbl_outlet.
     * @param {tbl_outletUpdateArgs} args - Arguments to update one Tbl_outlet.
     * @example
     * // Update one Tbl_outlet
     * const tbl_outlet = await prisma.tbl_outlet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_outletUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_outletUpdateArgs<ExtArgs>>
    ): Prisma__tbl_outletClient<$Types.GetResult<tbl_outletPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_outlets.
     * @param {tbl_outletDeleteManyArgs} args - Arguments to filter Tbl_outlets to delete.
     * @example
     * // Delete a few Tbl_outlets
     * const { count } = await prisma.tbl_outlet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_outletDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_outletDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_outletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_outlets
     * const tbl_outlet = await prisma.tbl_outlet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_outletUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_outletUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_outlet.
     * @param {tbl_outletUpsertArgs} args - Arguments to update or create a Tbl_outlet.
     * @example
     * // Update or create a Tbl_outlet
     * const tbl_outlet = await prisma.tbl_outlet.upsert({
     *   create: {
     *     // ... data to create a Tbl_outlet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_outlet we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_outletUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_outletUpsertArgs<ExtArgs>>
    ): Prisma__tbl_outletClient<$Types.GetResult<tbl_outletPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tbl_outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_outletCountArgs} args - Arguments to filter Tbl_outlets to count.
     * @example
     * // Count the number of Tbl_outlets
     * const count = await prisma.tbl_outlet.count({
     *   where: {
     *     // ... the filter for the Tbl_outlets we want to count
     *   }
     * })
    **/
    count<T extends tbl_outletCountArgs>(
      args?: Subset<T, tbl_outletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_outletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_outletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_outletAggregateArgs>(args: Subset<T, Tbl_outletAggregateArgs>): Prisma.PrismaPromise<GetTbl_outletAggregateType<T>>

    /**
     * Group by Tbl_outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_outletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tbl_outletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tbl_outletGroupByArgs['orderBy'] }
        : { orderBy?: Tbl_outletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tbl_outletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_outletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_outlet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tbl_outletClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tbl_outlet base type for findUnique actions
   */
  export type tbl_outletFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_outlet
     */
    select?: tbl_outletSelect<ExtArgs> | null
    /**
     * Filter, which tbl_outlet to fetch.
     */
    where: tbl_outletWhereUniqueInput
  }

  /**
   * tbl_outlet findUnique
   */
  export interface tbl_outletFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_outletFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_outlet findUniqueOrThrow
   */
  export type tbl_outletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_outlet
     */
    select?: tbl_outletSelect<ExtArgs> | null
    /**
     * Filter, which tbl_outlet to fetch.
     */
    where: tbl_outletWhereUniqueInput
  }


  /**
   * tbl_outlet base type for findFirst actions
   */
  export type tbl_outletFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_outlet
     */
    select?: tbl_outletSelect<ExtArgs> | null
    /**
     * Filter, which tbl_outlet to fetch.
     */
    where?: tbl_outletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_outlets to fetch.
     */
    orderBy?: Enumerable<tbl_outletOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_outlets.
     */
    cursor?: tbl_outletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_outlets.
     */
    distinct?: Enumerable<Tbl_outletScalarFieldEnum>
  }

  /**
   * tbl_outlet findFirst
   */
  export interface tbl_outletFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_outletFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_outlet findFirstOrThrow
   */
  export type tbl_outletFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_outlet
     */
    select?: tbl_outletSelect<ExtArgs> | null
    /**
     * Filter, which tbl_outlet to fetch.
     */
    where?: tbl_outletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_outlets to fetch.
     */
    orderBy?: Enumerable<tbl_outletOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_outlets.
     */
    cursor?: tbl_outletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_outlets.
     */
    distinct?: Enumerable<Tbl_outletScalarFieldEnum>
  }


  /**
   * tbl_outlet findMany
   */
  export type tbl_outletFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_outlet
     */
    select?: tbl_outletSelect<ExtArgs> | null
    /**
     * Filter, which tbl_outlets to fetch.
     */
    where?: tbl_outletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_outlets to fetch.
     */
    orderBy?: Enumerable<tbl_outletOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_outlets.
     */
    cursor?: tbl_outletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_outlets.
     */
    skip?: number
    distinct?: Enumerable<Tbl_outletScalarFieldEnum>
  }


  /**
   * tbl_outlet create
   */
  export type tbl_outletCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_outlet
     */
    select?: tbl_outletSelect<ExtArgs> | null
    /**
     * The data needed to create a tbl_outlet.
     */
    data?: XOR<tbl_outletCreateInput, tbl_outletUncheckedCreateInput>
  }


  /**
   * tbl_outlet createMany
   */
  export type tbl_outletCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_outlets.
     */
    data: Enumerable<tbl_outletCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tbl_outlet update
   */
  export type tbl_outletUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_outlet
     */
    select?: tbl_outletSelect<ExtArgs> | null
    /**
     * The data needed to update a tbl_outlet.
     */
    data: XOR<tbl_outletUpdateInput, tbl_outletUncheckedUpdateInput>
    /**
     * Choose, which tbl_outlet to update.
     */
    where: tbl_outletWhereUniqueInput
  }


  /**
   * tbl_outlet updateMany
   */
  export type tbl_outletUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_outlets.
     */
    data: XOR<tbl_outletUpdateManyMutationInput, tbl_outletUncheckedUpdateManyInput>
    /**
     * Filter which tbl_outlets to update
     */
    where?: tbl_outletWhereInput
  }


  /**
   * tbl_outlet upsert
   */
  export type tbl_outletUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_outlet
     */
    select?: tbl_outletSelect<ExtArgs> | null
    /**
     * The filter to search for the tbl_outlet to update in case it exists.
     */
    where: tbl_outletWhereUniqueInput
    /**
     * In case the tbl_outlet found by the `where` argument doesn't exist, create a new tbl_outlet with this data.
     */
    create: XOR<tbl_outletCreateInput, tbl_outletUncheckedCreateInput>
    /**
     * In case the tbl_outlet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_outletUpdateInput, tbl_outletUncheckedUpdateInput>
  }


  /**
   * tbl_outlet delete
   */
  export type tbl_outletDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_outlet
     */
    select?: tbl_outletSelect<ExtArgs> | null
    /**
     * Filter which tbl_outlet to delete.
     */
    where: tbl_outletWhereUniqueInput
  }


  /**
   * tbl_outlet deleteMany
   */
  export type tbl_outletDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_outlets to delete
     */
    where?: tbl_outletWhereInput
  }


  /**
   * tbl_outlet without action
   */
  export type tbl_outletArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_outlet
     */
    select?: tbl_outletSelect<ExtArgs> | null
  }



  /**
   * Model tbl_saleperson
   */


  export type AggregateTbl_saleperson = {
    _count: Tbl_salepersonCountAggregateOutputType | null
    _avg: Tbl_salepersonAvgAggregateOutputType | null
    _sum: Tbl_salepersonSumAggregateOutputType | null
    _min: Tbl_salepersonMinAggregateOutputType | null
    _max: Tbl_salepersonMaxAggregateOutputType | null
  }

  export type Tbl_salepersonAvgAggregateOutputType = {
    spid: number | null
  }

  export type Tbl_salepersonSumAggregateOutputType = {
    spid: number | null
  }

  export type Tbl_salepersonMinAggregateOutputType = {
    spid: number | null
    spfullname: string | null
    spmobile: string | null
    spcreated: Date | null
    spstatus: string | null
  }

  export type Tbl_salepersonMaxAggregateOutputType = {
    spid: number | null
    spfullname: string | null
    spmobile: string | null
    spcreated: Date | null
    spstatus: string | null
  }

  export type Tbl_salepersonCountAggregateOutputType = {
    spid: number
    spfullname: number
    spmobile: number
    spcreated: number
    spstatus: number
    _all: number
  }


  export type Tbl_salepersonAvgAggregateInputType = {
    spid?: true
  }

  export type Tbl_salepersonSumAggregateInputType = {
    spid?: true
  }

  export type Tbl_salepersonMinAggregateInputType = {
    spid?: true
    spfullname?: true
    spmobile?: true
    spcreated?: true
    spstatus?: true
  }

  export type Tbl_salepersonMaxAggregateInputType = {
    spid?: true
    spfullname?: true
    spmobile?: true
    spcreated?: true
    spstatus?: true
  }

  export type Tbl_salepersonCountAggregateInputType = {
    spid?: true
    spfullname?: true
    spmobile?: true
    spcreated?: true
    spstatus?: true
    _all?: true
  }

  export type Tbl_salepersonAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_saleperson to aggregate.
     */
    where?: tbl_salepersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_salepeople to fetch.
     */
    orderBy?: Enumerable<tbl_salepersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_salepersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_salepeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_salepeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_salepeople
    **/
    _count?: true | Tbl_salepersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_salepersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_salepersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_salepersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_salepersonMaxAggregateInputType
  }

  export type GetTbl_salepersonAggregateType<T extends Tbl_salepersonAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_saleperson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_saleperson[P]>
      : GetScalarType<T[P], AggregateTbl_saleperson[P]>
  }




  export type Tbl_salepersonGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: tbl_salepersonWhereInput
    orderBy?: Enumerable<tbl_salepersonOrderByWithAggregationInput>
    by: Tbl_salepersonScalarFieldEnum[]
    having?: tbl_salepersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_salepersonCountAggregateInputType | true
    _avg?: Tbl_salepersonAvgAggregateInputType
    _sum?: Tbl_salepersonSumAggregateInputType
    _min?: Tbl_salepersonMinAggregateInputType
    _max?: Tbl_salepersonMaxAggregateInputType
  }


  export type Tbl_salepersonGroupByOutputType = {
    spid: number
    spfullname: string | null
    spmobile: string | null
    spcreated: Date | null
    spstatus: string | null
    _count: Tbl_salepersonCountAggregateOutputType | null
    _avg: Tbl_salepersonAvgAggregateOutputType | null
    _sum: Tbl_salepersonSumAggregateOutputType | null
    _min: Tbl_salepersonMinAggregateOutputType | null
    _max: Tbl_salepersonMaxAggregateOutputType | null
  }

  type GetTbl_salepersonGroupByPayload<T extends Tbl_salepersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Tbl_salepersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_salepersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_salepersonGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_salepersonGroupByOutputType[P]>
        }
      >
    >


  export type tbl_salepersonSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    spid?: boolean
    spfullname?: boolean
    spmobile?: boolean
    spcreated?: boolean
    spstatus?: boolean
  }, ExtArgs["result"]["tbl_saleperson"]>

  export type tbl_salepersonSelectScalar = {
    spid?: boolean
    spfullname?: boolean
    spmobile?: boolean
    spcreated?: boolean
    spstatus?: boolean
  }


  type tbl_salepersonGetPayload<S extends boolean | null | undefined | tbl_salepersonArgs> = $Types.GetResult<tbl_salepersonPayload, S>

  type tbl_salepersonCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<tbl_salepersonFindManyArgs, 'select' | 'include'> & {
      select?: Tbl_salepersonCountAggregateInputType | true
    }

  export interface tbl_salepersonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_saleperson'], meta: { name: 'tbl_saleperson' } }
    /**
     * Find zero or one Tbl_saleperson that matches the filter.
     * @param {tbl_salepersonFindUniqueArgs} args - Arguments to find a Tbl_saleperson
     * @example
     * // Get one Tbl_saleperson
     * const tbl_saleperson = await prisma.tbl_saleperson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_salepersonFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tbl_salepersonFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tbl_saleperson'> extends True ? Prisma__tbl_salepersonClient<$Types.GetResult<tbl_salepersonPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__tbl_salepersonClient<$Types.GetResult<tbl_salepersonPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Tbl_saleperson that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_salepersonFindUniqueOrThrowArgs} args - Arguments to find a Tbl_saleperson
     * @example
     * // Get one Tbl_saleperson
     * const tbl_saleperson = await prisma.tbl_saleperson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_salepersonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_salepersonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_salepersonClient<$Types.GetResult<tbl_salepersonPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Tbl_saleperson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_salepersonFindFirstArgs} args - Arguments to find a Tbl_saleperson
     * @example
     * // Get one Tbl_saleperson
     * const tbl_saleperson = await prisma.tbl_saleperson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_salepersonFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tbl_salepersonFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tbl_saleperson'> extends True ? Prisma__tbl_salepersonClient<$Types.GetResult<tbl_salepersonPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__tbl_salepersonClient<$Types.GetResult<tbl_salepersonPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Tbl_saleperson that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_salepersonFindFirstOrThrowArgs} args - Arguments to find a Tbl_saleperson
     * @example
     * // Get one Tbl_saleperson
     * const tbl_saleperson = await prisma.tbl_saleperson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_salepersonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_salepersonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_salepersonClient<$Types.GetResult<tbl_salepersonPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tbl_salepeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_salepersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_salepeople
     * const tbl_salepeople = await prisma.tbl_saleperson.findMany()
     * 
     * // Get first 10 Tbl_salepeople
     * const tbl_salepeople = await prisma.tbl_saleperson.findMany({ take: 10 })
     * 
     * // Only select the `spid`
     * const tbl_salepersonWithSpidOnly = await prisma.tbl_saleperson.findMany({ select: { spid: true } })
     * 
    **/
    findMany<T extends tbl_salepersonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_salepersonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<tbl_salepersonPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Tbl_saleperson.
     * @param {tbl_salepersonCreateArgs} args - Arguments to create a Tbl_saleperson.
     * @example
     * // Create one Tbl_saleperson
     * const Tbl_saleperson = await prisma.tbl_saleperson.create({
     *   data: {
     *     // ... data to create a Tbl_saleperson
     *   }
     * })
     * 
    **/
    create<T extends tbl_salepersonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_salepersonCreateArgs<ExtArgs>>
    ): Prisma__tbl_salepersonClient<$Types.GetResult<tbl_salepersonPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tbl_salepeople.
     *     @param {tbl_salepersonCreateManyArgs} args - Arguments to create many Tbl_salepeople.
     *     @example
     *     // Create many Tbl_salepeople
     *     const tbl_saleperson = await prisma.tbl_saleperson.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_salepersonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_salepersonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_saleperson.
     * @param {tbl_salepersonDeleteArgs} args - Arguments to delete one Tbl_saleperson.
     * @example
     * // Delete one Tbl_saleperson
     * const Tbl_saleperson = await prisma.tbl_saleperson.delete({
     *   where: {
     *     // ... filter to delete one Tbl_saleperson
     *   }
     * })
     * 
    **/
    delete<T extends tbl_salepersonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_salepersonDeleteArgs<ExtArgs>>
    ): Prisma__tbl_salepersonClient<$Types.GetResult<tbl_salepersonPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Tbl_saleperson.
     * @param {tbl_salepersonUpdateArgs} args - Arguments to update one Tbl_saleperson.
     * @example
     * // Update one Tbl_saleperson
     * const tbl_saleperson = await prisma.tbl_saleperson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_salepersonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_salepersonUpdateArgs<ExtArgs>>
    ): Prisma__tbl_salepersonClient<$Types.GetResult<tbl_salepersonPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_salepeople.
     * @param {tbl_salepersonDeleteManyArgs} args - Arguments to filter Tbl_salepeople to delete.
     * @example
     * // Delete a few Tbl_salepeople
     * const { count } = await prisma.tbl_saleperson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_salepersonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_salepersonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_salepeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_salepersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_salepeople
     * const tbl_saleperson = await prisma.tbl_saleperson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_salepersonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_salepersonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_saleperson.
     * @param {tbl_salepersonUpsertArgs} args - Arguments to update or create a Tbl_saleperson.
     * @example
     * // Update or create a Tbl_saleperson
     * const tbl_saleperson = await prisma.tbl_saleperson.upsert({
     *   create: {
     *     // ... data to create a Tbl_saleperson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_saleperson we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_salepersonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_salepersonUpsertArgs<ExtArgs>>
    ): Prisma__tbl_salepersonClient<$Types.GetResult<tbl_salepersonPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tbl_salepeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_salepersonCountArgs} args - Arguments to filter Tbl_salepeople to count.
     * @example
     * // Count the number of Tbl_salepeople
     * const count = await prisma.tbl_saleperson.count({
     *   where: {
     *     // ... the filter for the Tbl_salepeople we want to count
     *   }
     * })
    **/
    count<T extends tbl_salepersonCountArgs>(
      args?: Subset<T, tbl_salepersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_salepersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_saleperson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_salepersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_salepersonAggregateArgs>(args: Subset<T, Tbl_salepersonAggregateArgs>): Prisma.PrismaPromise<GetTbl_salepersonAggregateType<T>>

    /**
     * Group by Tbl_saleperson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_salepersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tbl_salepersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tbl_salepersonGroupByArgs['orderBy'] }
        : { orderBy?: Tbl_salepersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tbl_salepersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_salepersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_saleperson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tbl_salepersonClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tbl_saleperson base type for findUnique actions
   */
  export type tbl_salepersonFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_saleperson
     */
    select?: tbl_salepersonSelect<ExtArgs> | null
    /**
     * Filter, which tbl_saleperson to fetch.
     */
    where: tbl_salepersonWhereUniqueInput
  }

  /**
   * tbl_saleperson findUnique
   */
  export interface tbl_salepersonFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_salepersonFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_saleperson findUniqueOrThrow
   */
  export type tbl_salepersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_saleperson
     */
    select?: tbl_salepersonSelect<ExtArgs> | null
    /**
     * Filter, which tbl_saleperson to fetch.
     */
    where: tbl_salepersonWhereUniqueInput
  }


  /**
   * tbl_saleperson base type for findFirst actions
   */
  export type tbl_salepersonFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_saleperson
     */
    select?: tbl_salepersonSelect<ExtArgs> | null
    /**
     * Filter, which tbl_saleperson to fetch.
     */
    where?: tbl_salepersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_salepeople to fetch.
     */
    orderBy?: Enumerable<tbl_salepersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_salepeople.
     */
    cursor?: tbl_salepersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_salepeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_salepeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_salepeople.
     */
    distinct?: Enumerable<Tbl_salepersonScalarFieldEnum>
  }

  /**
   * tbl_saleperson findFirst
   */
  export interface tbl_salepersonFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_salepersonFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_saleperson findFirstOrThrow
   */
  export type tbl_salepersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_saleperson
     */
    select?: tbl_salepersonSelect<ExtArgs> | null
    /**
     * Filter, which tbl_saleperson to fetch.
     */
    where?: tbl_salepersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_salepeople to fetch.
     */
    orderBy?: Enumerable<tbl_salepersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_salepeople.
     */
    cursor?: tbl_salepersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_salepeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_salepeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_salepeople.
     */
    distinct?: Enumerable<Tbl_salepersonScalarFieldEnum>
  }


  /**
   * tbl_saleperson findMany
   */
  export type tbl_salepersonFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_saleperson
     */
    select?: tbl_salepersonSelect<ExtArgs> | null
    /**
     * Filter, which tbl_salepeople to fetch.
     */
    where?: tbl_salepersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_salepeople to fetch.
     */
    orderBy?: Enumerable<tbl_salepersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_salepeople.
     */
    cursor?: tbl_salepersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_salepeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_salepeople.
     */
    skip?: number
    distinct?: Enumerable<Tbl_salepersonScalarFieldEnum>
  }


  /**
   * tbl_saleperson create
   */
  export type tbl_salepersonCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_saleperson
     */
    select?: tbl_salepersonSelect<ExtArgs> | null
    /**
     * The data needed to create a tbl_saleperson.
     */
    data?: XOR<tbl_salepersonCreateInput, tbl_salepersonUncheckedCreateInput>
  }


  /**
   * tbl_saleperson createMany
   */
  export type tbl_salepersonCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_salepeople.
     */
    data: Enumerable<tbl_salepersonCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tbl_saleperson update
   */
  export type tbl_salepersonUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_saleperson
     */
    select?: tbl_salepersonSelect<ExtArgs> | null
    /**
     * The data needed to update a tbl_saleperson.
     */
    data: XOR<tbl_salepersonUpdateInput, tbl_salepersonUncheckedUpdateInput>
    /**
     * Choose, which tbl_saleperson to update.
     */
    where: tbl_salepersonWhereUniqueInput
  }


  /**
   * tbl_saleperson updateMany
   */
  export type tbl_salepersonUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_salepeople.
     */
    data: XOR<tbl_salepersonUpdateManyMutationInput, tbl_salepersonUncheckedUpdateManyInput>
    /**
     * Filter which tbl_salepeople to update
     */
    where?: tbl_salepersonWhereInput
  }


  /**
   * tbl_saleperson upsert
   */
  export type tbl_salepersonUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_saleperson
     */
    select?: tbl_salepersonSelect<ExtArgs> | null
    /**
     * The filter to search for the tbl_saleperson to update in case it exists.
     */
    where: tbl_salepersonWhereUniqueInput
    /**
     * In case the tbl_saleperson found by the `where` argument doesn't exist, create a new tbl_saleperson with this data.
     */
    create: XOR<tbl_salepersonCreateInput, tbl_salepersonUncheckedCreateInput>
    /**
     * In case the tbl_saleperson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_salepersonUpdateInput, tbl_salepersonUncheckedUpdateInput>
  }


  /**
   * tbl_saleperson delete
   */
  export type tbl_salepersonDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_saleperson
     */
    select?: tbl_salepersonSelect<ExtArgs> | null
    /**
     * Filter which tbl_saleperson to delete.
     */
    where: tbl_salepersonWhereUniqueInput
  }


  /**
   * tbl_saleperson deleteMany
   */
  export type tbl_salepersonDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_salepeople to delete
     */
    where?: tbl_salepersonWhereInput
  }


  /**
   * tbl_saleperson without action
   */
  export type tbl_salepersonArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_saleperson
     */
    select?: tbl_salepersonSelect<ExtArgs> | null
  }



  /**
   * Model tbl_settings
   */


  export type AggregateTbl_settings = {
    _count: Tbl_settingsCountAggregateOutputType | null
    _avg: Tbl_settingsAvgAggregateOutputType | null
    _sum: Tbl_settingsSumAggregateOutputType | null
    _min: Tbl_settingsMinAggregateOutputType | null
    _max: Tbl_settingsMaxAggregateOutputType | null
  }

  export type Tbl_settingsAvgAggregateOutputType = {
    setid: number | null
  }

  export type Tbl_settingsSumAggregateOutputType = {
    setid: number | null
  }

  export type Tbl_settingsMinAggregateOutputType = {
    setid: number | null
    settitle: string | null
    setvalue: string | null
  }

  export type Tbl_settingsMaxAggregateOutputType = {
    setid: number | null
    settitle: string | null
    setvalue: string | null
  }

  export type Tbl_settingsCountAggregateOutputType = {
    setid: number
    settitle: number
    setvalue: number
    _all: number
  }


  export type Tbl_settingsAvgAggregateInputType = {
    setid?: true
  }

  export type Tbl_settingsSumAggregateInputType = {
    setid?: true
  }

  export type Tbl_settingsMinAggregateInputType = {
    setid?: true
    settitle?: true
    setvalue?: true
  }

  export type Tbl_settingsMaxAggregateInputType = {
    setid?: true
    settitle?: true
    setvalue?: true
  }

  export type Tbl_settingsCountAggregateInputType = {
    setid?: true
    settitle?: true
    setvalue?: true
    _all?: true
  }

  export type Tbl_settingsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_settings to aggregate.
     */
    where?: tbl_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_settings to fetch.
     */
    orderBy?: Enumerable<tbl_settingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_settings
    **/
    _count?: true | Tbl_settingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_settingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_settingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_settingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_settingsMaxAggregateInputType
  }

  export type GetTbl_settingsAggregateType<T extends Tbl_settingsAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_settings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_settings[P]>
      : GetScalarType<T[P], AggregateTbl_settings[P]>
  }




  export type Tbl_settingsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: tbl_settingsWhereInput
    orderBy?: Enumerable<tbl_settingsOrderByWithAggregationInput>
    by: Tbl_settingsScalarFieldEnum[]
    having?: tbl_settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_settingsCountAggregateInputType | true
    _avg?: Tbl_settingsAvgAggregateInputType
    _sum?: Tbl_settingsSumAggregateInputType
    _min?: Tbl_settingsMinAggregateInputType
    _max?: Tbl_settingsMaxAggregateInputType
  }


  export type Tbl_settingsGroupByOutputType = {
    setid: number
    settitle: string | null
    setvalue: string | null
    _count: Tbl_settingsCountAggregateOutputType | null
    _avg: Tbl_settingsAvgAggregateOutputType | null
    _sum: Tbl_settingsSumAggregateOutputType | null
    _min: Tbl_settingsMinAggregateOutputType | null
    _max: Tbl_settingsMaxAggregateOutputType | null
  }

  type GetTbl_settingsGroupByPayload<T extends Tbl_settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Tbl_settingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_settingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_settingsGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_settingsGroupByOutputType[P]>
        }
      >
    >


  export type tbl_settingsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    setid?: boolean
    settitle?: boolean
    setvalue?: boolean
  }, ExtArgs["result"]["tbl_settings"]>

  export type tbl_settingsSelectScalar = {
    setid?: boolean
    settitle?: boolean
    setvalue?: boolean
  }


  type tbl_settingsGetPayload<S extends boolean | null | undefined | tbl_settingsArgs> = $Types.GetResult<tbl_settingsPayload, S>

  type tbl_settingsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<tbl_settingsFindManyArgs, 'select' | 'include'> & {
      select?: Tbl_settingsCountAggregateInputType | true
    }

  export interface tbl_settingsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_settings'], meta: { name: 'tbl_settings' } }
    /**
     * Find zero or one Tbl_settings that matches the filter.
     * @param {tbl_settingsFindUniqueArgs} args - Arguments to find a Tbl_settings
     * @example
     * // Get one Tbl_settings
     * const tbl_settings = await prisma.tbl_settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_settingsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tbl_settingsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tbl_settings'> extends True ? Prisma__tbl_settingsClient<$Types.GetResult<tbl_settingsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__tbl_settingsClient<$Types.GetResult<tbl_settingsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Tbl_settings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_settingsFindUniqueOrThrowArgs} args - Arguments to find a Tbl_settings
     * @example
     * // Get one Tbl_settings
     * const tbl_settings = await prisma.tbl_settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_settingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_settingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_settingsClient<$Types.GetResult<tbl_settingsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Tbl_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_settingsFindFirstArgs} args - Arguments to find a Tbl_settings
     * @example
     * // Get one Tbl_settings
     * const tbl_settings = await prisma.tbl_settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_settingsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tbl_settingsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tbl_settings'> extends True ? Prisma__tbl_settingsClient<$Types.GetResult<tbl_settingsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__tbl_settingsClient<$Types.GetResult<tbl_settingsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Tbl_settings that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_settingsFindFirstOrThrowArgs} args - Arguments to find a Tbl_settings
     * @example
     * // Get one Tbl_settings
     * const tbl_settings = await prisma.tbl_settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_settingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_settingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_settingsClient<$Types.GetResult<tbl_settingsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tbl_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_settingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_settings
     * const tbl_settings = await prisma.tbl_settings.findMany()
     * 
     * // Get first 10 Tbl_settings
     * const tbl_settings = await prisma.tbl_settings.findMany({ take: 10 })
     * 
     * // Only select the `setid`
     * const tbl_settingsWithSetidOnly = await prisma.tbl_settings.findMany({ select: { setid: true } })
     * 
    **/
    findMany<T extends tbl_settingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_settingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<tbl_settingsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Tbl_settings.
     * @param {tbl_settingsCreateArgs} args - Arguments to create a Tbl_settings.
     * @example
     * // Create one Tbl_settings
     * const Tbl_settings = await prisma.tbl_settings.create({
     *   data: {
     *     // ... data to create a Tbl_settings
     *   }
     * })
     * 
    **/
    create<T extends tbl_settingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_settingsCreateArgs<ExtArgs>>
    ): Prisma__tbl_settingsClient<$Types.GetResult<tbl_settingsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tbl_settings.
     *     @param {tbl_settingsCreateManyArgs} args - Arguments to create many Tbl_settings.
     *     @example
     *     // Create many Tbl_settings
     *     const tbl_settings = await prisma.tbl_settings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_settingsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_settingsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_settings.
     * @param {tbl_settingsDeleteArgs} args - Arguments to delete one Tbl_settings.
     * @example
     * // Delete one Tbl_settings
     * const Tbl_settings = await prisma.tbl_settings.delete({
     *   where: {
     *     // ... filter to delete one Tbl_settings
     *   }
     * })
     * 
    **/
    delete<T extends tbl_settingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_settingsDeleteArgs<ExtArgs>>
    ): Prisma__tbl_settingsClient<$Types.GetResult<tbl_settingsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Tbl_settings.
     * @param {tbl_settingsUpdateArgs} args - Arguments to update one Tbl_settings.
     * @example
     * // Update one Tbl_settings
     * const tbl_settings = await prisma.tbl_settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_settingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_settingsUpdateArgs<ExtArgs>>
    ): Prisma__tbl_settingsClient<$Types.GetResult<tbl_settingsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_settings.
     * @param {tbl_settingsDeleteManyArgs} args - Arguments to filter Tbl_settings to delete.
     * @example
     * // Delete a few Tbl_settings
     * const { count } = await prisma.tbl_settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_settingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_settingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_settings
     * const tbl_settings = await prisma.tbl_settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_settingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_settingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_settings.
     * @param {tbl_settingsUpsertArgs} args - Arguments to update or create a Tbl_settings.
     * @example
     * // Update or create a Tbl_settings
     * const tbl_settings = await prisma.tbl_settings.upsert({
     *   create: {
     *     // ... data to create a Tbl_settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_settings we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_settingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_settingsUpsertArgs<ExtArgs>>
    ): Prisma__tbl_settingsClient<$Types.GetResult<tbl_settingsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tbl_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_settingsCountArgs} args - Arguments to filter Tbl_settings to count.
     * @example
     * // Count the number of Tbl_settings
     * const count = await prisma.tbl_settings.count({
     *   where: {
     *     // ... the filter for the Tbl_settings we want to count
     *   }
     * })
    **/
    count<T extends tbl_settingsCountArgs>(
      args?: Subset<T, tbl_settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_settingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_settingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_settingsAggregateArgs>(args: Subset<T, Tbl_settingsAggregateArgs>): Prisma.PrismaPromise<GetTbl_settingsAggregateType<T>>

    /**
     * Group by Tbl_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_settingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tbl_settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tbl_settingsGroupByArgs['orderBy'] }
        : { orderBy?: Tbl_settingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tbl_settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_settingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tbl_settingsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tbl_settings base type for findUnique actions
   */
  export type tbl_settingsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_settings
     */
    select?: tbl_settingsSelect<ExtArgs> | null
    /**
     * Filter, which tbl_settings to fetch.
     */
    where: tbl_settingsWhereUniqueInput
  }

  /**
   * tbl_settings findUnique
   */
  export interface tbl_settingsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_settingsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_settings findUniqueOrThrow
   */
  export type tbl_settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_settings
     */
    select?: tbl_settingsSelect<ExtArgs> | null
    /**
     * Filter, which tbl_settings to fetch.
     */
    where: tbl_settingsWhereUniqueInput
  }


  /**
   * tbl_settings base type for findFirst actions
   */
  export type tbl_settingsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_settings
     */
    select?: tbl_settingsSelect<ExtArgs> | null
    /**
     * Filter, which tbl_settings to fetch.
     */
    where?: tbl_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_settings to fetch.
     */
    orderBy?: Enumerable<tbl_settingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_settings.
     */
    cursor?: tbl_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_settings.
     */
    distinct?: Enumerable<Tbl_settingsScalarFieldEnum>
  }

  /**
   * tbl_settings findFirst
   */
  export interface tbl_settingsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_settingsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_settings findFirstOrThrow
   */
  export type tbl_settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_settings
     */
    select?: tbl_settingsSelect<ExtArgs> | null
    /**
     * Filter, which tbl_settings to fetch.
     */
    where?: tbl_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_settings to fetch.
     */
    orderBy?: Enumerable<tbl_settingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_settings.
     */
    cursor?: tbl_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_settings.
     */
    distinct?: Enumerable<Tbl_settingsScalarFieldEnum>
  }


  /**
   * tbl_settings findMany
   */
  export type tbl_settingsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_settings
     */
    select?: tbl_settingsSelect<ExtArgs> | null
    /**
     * Filter, which tbl_settings to fetch.
     */
    where?: tbl_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_settings to fetch.
     */
    orderBy?: Enumerable<tbl_settingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_settings.
     */
    cursor?: tbl_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_settings.
     */
    skip?: number
    distinct?: Enumerable<Tbl_settingsScalarFieldEnum>
  }


  /**
   * tbl_settings create
   */
  export type tbl_settingsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_settings
     */
    select?: tbl_settingsSelect<ExtArgs> | null
    /**
     * The data needed to create a tbl_settings.
     */
    data?: XOR<tbl_settingsCreateInput, tbl_settingsUncheckedCreateInput>
  }


  /**
   * tbl_settings createMany
   */
  export type tbl_settingsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_settings.
     */
    data: Enumerable<tbl_settingsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tbl_settings update
   */
  export type tbl_settingsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_settings
     */
    select?: tbl_settingsSelect<ExtArgs> | null
    /**
     * The data needed to update a tbl_settings.
     */
    data: XOR<tbl_settingsUpdateInput, tbl_settingsUncheckedUpdateInput>
    /**
     * Choose, which tbl_settings to update.
     */
    where: tbl_settingsWhereUniqueInput
  }


  /**
   * tbl_settings updateMany
   */
  export type tbl_settingsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_settings.
     */
    data: XOR<tbl_settingsUpdateManyMutationInput, tbl_settingsUncheckedUpdateManyInput>
    /**
     * Filter which tbl_settings to update
     */
    where?: tbl_settingsWhereInput
  }


  /**
   * tbl_settings upsert
   */
  export type tbl_settingsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_settings
     */
    select?: tbl_settingsSelect<ExtArgs> | null
    /**
     * The filter to search for the tbl_settings to update in case it exists.
     */
    where: tbl_settingsWhereUniqueInput
    /**
     * In case the tbl_settings found by the `where` argument doesn't exist, create a new tbl_settings with this data.
     */
    create: XOR<tbl_settingsCreateInput, tbl_settingsUncheckedCreateInput>
    /**
     * In case the tbl_settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_settingsUpdateInput, tbl_settingsUncheckedUpdateInput>
  }


  /**
   * tbl_settings delete
   */
  export type tbl_settingsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_settings
     */
    select?: tbl_settingsSelect<ExtArgs> | null
    /**
     * Filter which tbl_settings to delete.
     */
    where: tbl_settingsWhereUniqueInput
  }


  /**
   * tbl_settings deleteMany
   */
  export type tbl_settingsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_settings to delete
     */
    where?: tbl_settingsWhereInput
  }


  /**
   * tbl_settings without action
   */
  export type tbl_settingsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_settings
     */
    select?: tbl_settingsSelect<ExtArgs> | null
  }



  /**
   * Model tbl_survey
   */


  export type AggregateTbl_survey = {
    _count: Tbl_surveyCountAggregateOutputType | null
    _avg: Tbl_surveyAvgAggregateOutputType | null
    _sum: Tbl_surveySumAggregateOutputType | null
    _min: Tbl_surveyMinAggregateOutputType | null
    _max: Tbl_surveyMaxAggregateOutputType | null
  }

  export type Tbl_surveyAvgAggregateOutputType = {
    svid: number | null
  }

  export type Tbl_surveySumAggregateOutputType = {
    svid: number | null
  }

  export type Tbl_surveyMinAggregateOutputType = {
    svid: number | null
    svq: string | null
    sva1: string | null
    sva2: string | null
    sva3: string | null
  }

  export type Tbl_surveyMaxAggregateOutputType = {
    svid: number | null
    svq: string | null
    sva1: string | null
    sva2: string | null
    sva3: string | null
  }

  export type Tbl_surveyCountAggregateOutputType = {
    svid: number
    svq: number
    sva1: number
    sva2: number
    sva3: number
    _all: number
  }


  export type Tbl_surveyAvgAggregateInputType = {
    svid?: true
  }

  export type Tbl_surveySumAggregateInputType = {
    svid?: true
  }

  export type Tbl_surveyMinAggregateInputType = {
    svid?: true
    svq?: true
    sva1?: true
    sva2?: true
    sva3?: true
  }

  export type Tbl_surveyMaxAggregateInputType = {
    svid?: true
    svq?: true
    sva1?: true
    sva2?: true
    sva3?: true
  }

  export type Tbl_surveyCountAggregateInputType = {
    svid?: true
    svq?: true
    sva1?: true
    sva2?: true
    sva3?: true
    _all?: true
  }

  export type Tbl_surveyAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_survey to aggregate.
     */
    where?: tbl_surveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_surveys to fetch.
     */
    orderBy?: Enumerable<tbl_surveyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_surveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_surveys
    **/
    _count?: true | Tbl_surveyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_surveyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_surveySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_surveyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_surveyMaxAggregateInputType
  }

  export type GetTbl_surveyAggregateType<T extends Tbl_surveyAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_survey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_survey[P]>
      : GetScalarType<T[P], AggregateTbl_survey[P]>
  }




  export type Tbl_surveyGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: tbl_surveyWhereInput
    orderBy?: Enumerable<tbl_surveyOrderByWithAggregationInput>
    by: Tbl_surveyScalarFieldEnum[]
    having?: tbl_surveyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_surveyCountAggregateInputType | true
    _avg?: Tbl_surveyAvgAggregateInputType
    _sum?: Tbl_surveySumAggregateInputType
    _min?: Tbl_surveyMinAggregateInputType
    _max?: Tbl_surveyMaxAggregateInputType
  }


  export type Tbl_surveyGroupByOutputType = {
    svid: number
    svq: string | null
    sva1: string | null
    sva2: string | null
    sva3: string | null
    _count: Tbl_surveyCountAggregateOutputType | null
    _avg: Tbl_surveyAvgAggregateOutputType | null
    _sum: Tbl_surveySumAggregateOutputType | null
    _min: Tbl_surveyMinAggregateOutputType | null
    _max: Tbl_surveyMaxAggregateOutputType | null
  }

  type GetTbl_surveyGroupByPayload<T extends Tbl_surveyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Tbl_surveyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_surveyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_surveyGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_surveyGroupByOutputType[P]>
        }
      >
    >


  export type tbl_surveySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    svid?: boolean
    svq?: boolean
    sva1?: boolean
    sva2?: boolean
    sva3?: boolean
  }, ExtArgs["result"]["tbl_survey"]>

  export type tbl_surveySelectScalar = {
    svid?: boolean
    svq?: boolean
    sva1?: boolean
    sva2?: boolean
    sva3?: boolean
  }


  type tbl_surveyGetPayload<S extends boolean | null | undefined | tbl_surveyArgs> = $Types.GetResult<tbl_surveyPayload, S>

  type tbl_surveyCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<tbl_surveyFindManyArgs, 'select' | 'include'> & {
      select?: Tbl_surveyCountAggregateInputType | true
    }

  export interface tbl_surveyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_survey'], meta: { name: 'tbl_survey' } }
    /**
     * Find zero or one Tbl_survey that matches the filter.
     * @param {tbl_surveyFindUniqueArgs} args - Arguments to find a Tbl_survey
     * @example
     * // Get one Tbl_survey
     * const tbl_survey = await prisma.tbl_survey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_surveyFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tbl_surveyFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tbl_survey'> extends True ? Prisma__tbl_surveyClient<$Types.GetResult<tbl_surveyPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__tbl_surveyClient<$Types.GetResult<tbl_surveyPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Tbl_survey that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_surveyFindUniqueOrThrowArgs} args - Arguments to find a Tbl_survey
     * @example
     * // Get one Tbl_survey
     * const tbl_survey = await prisma.tbl_survey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_surveyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_surveyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_surveyClient<$Types.GetResult<tbl_surveyPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Tbl_survey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_surveyFindFirstArgs} args - Arguments to find a Tbl_survey
     * @example
     * // Get one Tbl_survey
     * const tbl_survey = await prisma.tbl_survey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_surveyFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tbl_surveyFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tbl_survey'> extends True ? Prisma__tbl_surveyClient<$Types.GetResult<tbl_surveyPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__tbl_surveyClient<$Types.GetResult<tbl_surveyPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Tbl_survey that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_surveyFindFirstOrThrowArgs} args - Arguments to find a Tbl_survey
     * @example
     * // Get one Tbl_survey
     * const tbl_survey = await prisma.tbl_survey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_surveyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_surveyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_surveyClient<$Types.GetResult<tbl_surveyPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tbl_surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_surveyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_surveys
     * const tbl_surveys = await prisma.tbl_survey.findMany()
     * 
     * // Get first 10 Tbl_surveys
     * const tbl_surveys = await prisma.tbl_survey.findMany({ take: 10 })
     * 
     * // Only select the `svid`
     * const tbl_surveyWithSvidOnly = await prisma.tbl_survey.findMany({ select: { svid: true } })
     * 
    **/
    findMany<T extends tbl_surveyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_surveyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<tbl_surveyPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Tbl_survey.
     * @param {tbl_surveyCreateArgs} args - Arguments to create a Tbl_survey.
     * @example
     * // Create one Tbl_survey
     * const Tbl_survey = await prisma.tbl_survey.create({
     *   data: {
     *     // ... data to create a Tbl_survey
     *   }
     * })
     * 
    **/
    create<T extends tbl_surveyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_surveyCreateArgs<ExtArgs>>
    ): Prisma__tbl_surveyClient<$Types.GetResult<tbl_surveyPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tbl_surveys.
     *     @param {tbl_surveyCreateManyArgs} args - Arguments to create many Tbl_surveys.
     *     @example
     *     // Create many Tbl_surveys
     *     const tbl_survey = await prisma.tbl_survey.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_surveyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_surveyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_survey.
     * @param {tbl_surveyDeleteArgs} args - Arguments to delete one Tbl_survey.
     * @example
     * // Delete one Tbl_survey
     * const Tbl_survey = await prisma.tbl_survey.delete({
     *   where: {
     *     // ... filter to delete one Tbl_survey
     *   }
     * })
     * 
    **/
    delete<T extends tbl_surveyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_surveyDeleteArgs<ExtArgs>>
    ): Prisma__tbl_surveyClient<$Types.GetResult<tbl_surveyPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Tbl_survey.
     * @param {tbl_surveyUpdateArgs} args - Arguments to update one Tbl_survey.
     * @example
     * // Update one Tbl_survey
     * const tbl_survey = await prisma.tbl_survey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_surveyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_surveyUpdateArgs<ExtArgs>>
    ): Prisma__tbl_surveyClient<$Types.GetResult<tbl_surveyPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_surveys.
     * @param {tbl_surveyDeleteManyArgs} args - Arguments to filter Tbl_surveys to delete.
     * @example
     * // Delete a few Tbl_surveys
     * const { count } = await prisma.tbl_survey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_surveyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_surveyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_surveyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_surveys
     * const tbl_survey = await prisma.tbl_survey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_surveyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_surveyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_survey.
     * @param {tbl_surveyUpsertArgs} args - Arguments to update or create a Tbl_survey.
     * @example
     * // Update or create a Tbl_survey
     * const tbl_survey = await prisma.tbl_survey.upsert({
     *   create: {
     *     // ... data to create a Tbl_survey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_survey we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_surveyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_surveyUpsertArgs<ExtArgs>>
    ): Prisma__tbl_surveyClient<$Types.GetResult<tbl_surveyPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tbl_surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_surveyCountArgs} args - Arguments to filter Tbl_surveys to count.
     * @example
     * // Count the number of Tbl_surveys
     * const count = await prisma.tbl_survey.count({
     *   where: {
     *     // ... the filter for the Tbl_surveys we want to count
     *   }
     * })
    **/
    count<T extends tbl_surveyCountArgs>(
      args?: Subset<T, tbl_surveyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_surveyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_surveyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_surveyAggregateArgs>(args: Subset<T, Tbl_surveyAggregateArgs>): Prisma.PrismaPromise<GetTbl_surveyAggregateType<T>>

    /**
     * Group by Tbl_survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_surveyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tbl_surveyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tbl_surveyGroupByArgs['orderBy'] }
        : { orderBy?: Tbl_surveyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tbl_surveyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_surveyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_survey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tbl_surveyClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tbl_survey base type for findUnique actions
   */
  export type tbl_surveyFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_survey
     */
    select?: tbl_surveySelect<ExtArgs> | null
    /**
     * Filter, which tbl_survey to fetch.
     */
    where: tbl_surveyWhereUniqueInput
  }

  /**
   * tbl_survey findUnique
   */
  export interface tbl_surveyFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_surveyFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_survey findUniqueOrThrow
   */
  export type tbl_surveyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_survey
     */
    select?: tbl_surveySelect<ExtArgs> | null
    /**
     * Filter, which tbl_survey to fetch.
     */
    where: tbl_surveyWhereUniqueInput
  }


  /**
   * tbl_survey base type for findFirst actions
   */
  export type tbl_surveyFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_survey
     */
    select?: tbl_surveySelect<ExtArgs> | null
    /**
     * Filter, which tbl_survey to fetch.
     */
    where?: tbl_surveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_surveys to fetch.
     */
    orderBy?: Enumerable<tbl_surveyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_surveys.
     */
    cursor?: tbl_surveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_surveys.
     */
    distinct?: Enumerable<Tbl_surveyScalarFieldEnum>
  }

  /**
   * tbl_survey findFirst
   */
  export interface tbl_surveyFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_surveyFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_survey findFirstOrThrow
   */
  export type tbl_surveyFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_survey
     */
    select?: tbl_surveySelect<ExtArgs> | null
    /**
     * Filter, which tbl_survey to fetch.
     */
    where?: tbl_surveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_surveys to fetch.
     */
    orderBy?: Enumerable<tbl_surveyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_surveys.
     */
    cursor?: tbl_surveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_surveys.
     */
    distinct?: Enumerable<Tbl_surveyScalarFieldEnum>
  }


  /**
   * tbl_survey findMany
   */
  export type tbl_surveyFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_survey
     */
    select?: tbl_surveySelect<ExtArgs> | null
    /**
     * Filter, which tbl_surveys to fetch.
     */
    where?: tbl_surveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_surveys to fetch.
     */
    orderBy?: Enumerable<tbl_surveyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_surveys.
     */
    cursor?: tbl_surveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_surveys.
     */
    skip?: number
    distinct?: Enumerable<Tbl_surveyScalarFieldEnum>
  }


  /**
   * tbl_survey create
   */
  export type tbl_surveyCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_survey
     */
    select?: tbl_surveySelect<ExtArgs> | null
    /**
     * The data needed to create a tbl_survey.
     */
    data?: XOR<tbl_surveyCreateInput, tbl_surveyUncheckedCreateInput>
  }


  /**
   * tbl_survey createMany
   */
  export type tbl_surveyCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_surveys.
     */
    data: Enumerable<tbl_surveyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tbl_survey update
   */
  export type tbl_surveyUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_survey
     */
    select?: tbl_surveySelect<ExtArgs> | null
    /**
     * The data needed to update a tbl_survey.
     */
    data: XOR<tbl_surveyUpdateInput, tbl_surveyUncheckedUpdateInput>
    /**
     * Choose, which tbl_survey to update.
     */
    where: tbl_surveyWhereUniqueInput
  }


  /**
   * tbl_survey updateMany
   */
  export type tbl_surveyUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_surveys.
     */
    data: XOR<tbl_surveyUpdateManyMutationInput, tbl_surveyUncheckedUpdateManyInput>
    /**
     * Filter which tbl_surveys to update
     */
    where?: tbl_surveyWhereInput
  }


  /**
   * tbl_survey upsert
   */
  export type tbl_surveyUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_survey
     */
    select?: tbl_surveySelect<ExtArgs> | null
    /**
     * The filter to search for the tbl_survey to update in case it exists.
     */
    where: tbl_surveyWhereUniqueInput
    /**
     * In case the tbl_survey found by the `where` argument doesn't exist, create a new tbl_survey with this data.
     */
    create: XOR<tbl_surveyCreateInput, tbl_surveyUncheckedCreateInput>
    /**
     * In case the tbl_survey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_surveyUpdateInput, tbl_surveyUncheckedUpdateInput>
  }


  /**
   * tbl_survey delete
   */
  export type tbl_surveyDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_survey
     */
    select?: tbl_surveySelect<ExtArgs> | null
    /**
     * Filter which tbl_survey to delete.
     */
    where: tbl_surveyWhereUniqueInput
  }


  /**
   * tbl_survey deleteMany
   */
  export type tbl_surveyDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_surveys to delete
     */
    where?: tbl_surveyWhereInput
  }


  /**
   * tbl_survey without action
   */
  export type tbl_surveyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_survey
     */
    select?: tbl_surveySelect<ExtArgs> | null
  }



  /**
   * Model tbl_sysuser
   */


  export type AggregateTbl_sysuser = {
    _count: Tbl_sysuserCountAggregateOutputType | null
    _avg: Tbl_sysuserAvgAggregateOutputType | null
    _sum: Tbl_sysuserSumAggregateOutputType | null
    _min: Tbl_sysuserMinAggregateOutputType | null
    _max: Tbl_sysuserMaxAggregateOutputType | null
  }

  export type Tbl_sysuserAvgAggregateOutputType = {
    sysuid: number | null
  }

  export type Tbl_sysuserSumAggregateOutputType = {
    sysuid: number | null
  }

  export type Tbl_sysuserMinAggregateOutputType = {
    sysuid: number | null
    sysufulln: string | null
    sysumobile: string | null
    sysuemail: string | null
    sysuauth: string | null
    sysutype: string | null
    sysucreated: Date | null
  }

  export type Tbl_sysuserMaxAggregateOutputType = {
    sysuid: number | null
    sysufulln: string | null
    sysumobile: string | null
    sysuemail: string | null
    sysuauth: string | null
    sysutype: string | null
    sysucreated: Date | null
  }

  export type Tbl_sysuserCountAggregateOutputType = {
    sysuid: number
    sysufulln: number
    sysumobile: number
    sysuemail: number
    sysuauth: number
    sysutype: number
    sysucreated: number
    _all: number
  }


  export type Tbl_sysuserAvgAggregateInputType = {
    sysuid?: true
  }

  export type Tbl_sysuserSumAggregateInputType = {
    sysuid?: true
  }

  export type Tbl_sysuserMinAggregateInputType = {
    sysuid?: true
    sysufulln?: true
    sysumobile?: true
    sysuemail?: true
    sysuauth?: true
    sysutype?: true
    sysucreated?: true
  }

  export type Tbl_sysuserMaxAggregateInputType = {
    sysuid?: true
    sysufulln?: true
    sysumobile?: true
    sysuemail?: true
    sysuauth?: true
    sysutype?: true
    sysucreated?: true
  }

  export type Tbl_sysuserCountAggregateInputType = {
    sysuid?: true
    sysufulln?: true
    sysumobile?: true
    sysuemail?: true
    sysuauth?: true
    sysutype?: true
    sysucreated?: true
    _all?: true
  }

  export type Tbl_sysuserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_sysuser to aggregate.
     */
    where?: tbl_sysuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sysusers to fetch.
     */
    orderBy?: Enumerable<tbl_sysuserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_sysuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sysusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sysusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_sysusers
    **/
    _count?: true | Tbl_sysuserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_sysuserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_sysuserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_sysuserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_sysuserMaxAggregateInputType
  }

  export type GetTbl_sysuserAggregateType<T extends Tbl_sysuserAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_sysuser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_sysuser[P]>
      : GetScalarType<T[P], AggregateTbl_sysuser[P]>
  }




  export type Tbl_sysuserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: tbl_sysuserWhereInput
    orderBy?: Enumerable<tbl_sysuserOrderByWithAggregationInput>
    by: Tbl_sysuserScalarFieldEnum[]
    having?: tbl_sysuserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_sysuserCountAggregateInputType | true
    _avg?: Tbl_sysuserAvgAggregateInputType
    _sum?: Tbl_sysuserSumAggregateInputType
    _min?: Tbl_sysuserMinAggregateInputType
    _max?: Tbl_sysuserMaxAggregateInputType
  }


  export type Tbl_sysuserGroupByOutputType = {
    sysuid: number
    sysufulln: string | null
    sysumobile: string | null
    sysuemail: string | null
    sysuauth: string | null
    sysutype: string | null
    sysucreated: Date | null
    _count: Tbl_sysuserCountAggregateOutputType | null
    _avg: Tbl_sysuserAvgAggregateOutputType | null
    _sum: Tbl_sysuserSumAggregateOutputType | null
    _min: Tbl_sysuserMinAggregateOutputType | null
    _max: Tbl_sysuserMaxAggregateOutputType | null
  }

  type GetTbl_sysuserGroupByPayload<T extends Tbl_sysuserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Tbl_sysuserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_sysuserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_sysuserGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_sysuserGroupByOutputType[P]>
        }
      >
    >


  export type tbl_sysuserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sysuid?: boolean
    sysufulln?: boolean
    sysumobile?: boolean
    sysuemail?: boolean
    sysuauth?: boolean
    sysutype?: boolean
    sysucreated?: boolean
  }, ExtArgs["result"]["tbl_sysuser"]>

  export type tbl_sysuserSelectScalar = {
    sysuid?: boolean
    sysufulln?: boolean
    sysumobile?: boolean
    sysuemail?: boolean
    sysuauth?: boolean
    sysutype?: boolean
    sysucreated?: boolean
  }


  type tbl_sysuserGetPayload<S extends boolean | null | undefined | tbl_sysuserArgs> = $Types.GetResult<tbl_sysuserPayload, S>

  type tbl_sysuserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<tbl_sysuserFindManyArgs, 'select' | 'include'> & {
      select?: Tbl_sysuserCountAggregateInputType | true
    }

  export interface tbl_sysuserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_sysuser'], meta: { name: 'tbl_sysuser' } }
    /**
     * Find zero or one Tbl_sysuser that matches the filter.
     * @param {tbl_sysuserFindUniqueArgs} args - Arguments to find a Tbl_sysuser
     * @example
     * // Get one Tbl_sysuser
     * const tbl_sysuser = await prisma.tbl_sysuser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_sysuserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tbl_sysuserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tbl_sysuser'> extends True ? Prisma__tbl_sysuserClient<$Types.GetResult<tbl_sysuserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__tbl_sysuserClient<$Types.GetResult<tbl_sysuserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Tbl_sysuser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_sysuserFindUniqueOrThrowArgs} args - Arguments to find a Tbl_sysuser
     * @example
     * // Get one Tbl_sysuser
     * const tbl_sysuser = await prisma.tbl_sysuser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_sysuserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_sysuserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_sysuserClient<$Types.GetResult<tbl_sysuserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Tbl_sysuser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sysuserFindFirstArgs} args - Arguments to find a Tbl_sysuser
     * @example
     * // Get one Tbl_sysuser
     * const tbl_sysuser = await prisma.tbl_sysuser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_sysuserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tbl_sysuserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tbl_sysuser'> extends True ? Prisma__tbl_sysuserClient<$Types.GetResult<tbl_sysuserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__tbl_sysuserClient<$Types.GetResult<tbl_sysuserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Tbl_sysuser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sysuserFindFirstOrThrowArgs} args - Arguments to find a Tbl_sysuser
     * @example
     * // Get one Tbl_sysuser
     * const tbl_sysuser = await prisma.tbl_sysuser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_sysuserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_sysuserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_sysuserClient<$Types.GetResult<tbl_sysuserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tbl_sysusers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sysuserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_sysusers
     * const tbl_sysusers = await prisma.tbl_sysuser.findMany()
     * 
     * // Get first 10 Tbl_sysusers
     * const tbl_sysusers = await prisma.tbl_sysuser.findMany({ take: 10 })
     * 
     * // Only select the `sysuid`
     * const tbl_sysuserWithSysuidOnly = await prisma.tbl_sysuser.findMany({ select: { sysuid: true } })
     * 
    **/
    findMany<T extends tbl_sysuserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_sysuserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<tbl_sysuserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Tbl_sysuser.
     * @param {tbl_sysuserCreateArgs} args - Arguments to create a Tbl_sysuser.
     * @example
     * // Create one Tbl_sysuser
     * const Tbl_sysuser = await prisma.tbl_sysuser.create({
     *   data: {
     *     // ... data to create a Tbl_sysuser
     *   }
     * })
     * 
    **/
    create<T extends tbl_sysuserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_sysuserCreateArgs<ExtArgs>>
    ): Prisma__tbl_sysuserClient<$Types.GetResult<tbl_sysuserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tbl_sysusers.
     *     @param {tbl_sysuserCreateManyArgs} args - Arguments to create many Tbl_sysusers.
     *     @example
     *     // Create many Tbl_sysusers
     *     const tbl_sysuser = await prisma.tbl_sysuser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_sysuserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_sysuserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_sysuser.
     * @param {tbl_sysuserDeleteArgs} args - Arguments to delete one Tbl_sysuser.
     * @example
     * // Delete one Tbl_sysuser
     * const Tbl_sysuser = await prisma.tbl_sysuser.delete({
     *   where: {
     *     // ... filter to delete one Tbl_sysuser
     *   }
     * })
     * 
    **/
    delete<T extends tbl_sysuserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_sysuserDeleteArgs<ExtArgs>>
    ): Prisma__tbl_sysuserClient<$Types.GetResult<tbl_sysuserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Tbl_sysuser.
     * @param {tbl_sysuserUpdateArgs} args - Arguments to update one Tbl_sysuser.
     * @example
     * // Update one Tbl_sysuser
     * const tbl_sysuser = await prisma.tbl_sysuser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_sysuserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_sysuserUpdateArgs<ExtArgs>>
    ): Prisma__tbl_sysuserClient<$Types.GetResult<tbl_sysuserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_sysusers.
     * @param {tbl_sysuserDeleteManyArgs} args - Arguments to filter Tbl_sysusers to delete.
     * @example
     * // Delete a few Tbl_sysusers
     * const { count } = await prisma.tbl_sysuser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_sysuserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_sysuserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_sysusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sysuserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_sysusers
     * const tbl_sysuser = await prisma.tbl_sysuser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_sysuserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_sysuserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_sysuser.
     * @param {tbl_sysuserUpsertArgs} args - Arguments to update or create a Tbl_sysuser.
     * @example
     * // Update or create a Tbl_sysuser
     * const tbl_sysuser = await prisma.tbl_sysuser.upsert({
     *   create: {
     *     // ... data to create a Tbl_sysuser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_sysuser we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_sysuserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_sysuserUpsertArgs<ExtArgs>>
    ): Prisma__tbl_sysuserClient<$Types.GetResult<tbl_sysuserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tbl_sysusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sysuserCountArgs} args - Arguments to filter Tbl_sysusers to count.
     * @example
     * // Count the number of Tbl_sysusers
     * const count = await prisma.tbl_sysuser.count({
     *   where: {
     *     // ... the filter for the Tbl_sysusers we want to count
     *   }
     * })
    **/
    count<T extends tbl_sysuserCountArgs>(
      args?: Subset<T, tbl_sysuserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_sysuserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_sysuser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_sysuserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_sysuserAggregateArgs>(args: Subset<T, Tbl_sysuserAggregateArgs>): Prisma.PrismaPromise<GetTbl_sysuserAggregateType<T>>

    /**
     * Group by Tbl_sysuser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_sysuserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tbl_sysuserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tbl_sysuserGroupByArgs['orderBy'] }
        : { orderBy?: Tbl_sysuserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tbl_sysuserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_sysuserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_sysuser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tbl_sysuserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tbl_sysuser base type for findUnique actions
   */
  export type tbl_sysuserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sysuser
     */
    select?: tbl_sysuserSelect<ExtArgs> | null
    /**
     * Filter, which tbl_sysuser to fetch.
     */
    where: tbl_sysuserWhereUniqueInput
  }

  /**
   * tbl_sysuser findUnique
   */
  export interface tbl_sysuserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_sysuserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_sysuser findUniqueOrThrow
   */
  export type tbl_sysuserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sysuser
     */
    select?: tbl_sysuserSelect<ExtArgs> | null
    /**
     * Filter, which tbl_sysuser to fetch.
     */
    where: tbl_sysuserWhereUniqueInput
  }


  /**
   * tbl_sysuser base type for findFirst actions
   */
  export type tbl_sysuserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sysuser
     */
    select?: tbl_sysuserSelect<ExtArgs> | null
    /**
     * Filter, which tbl_sysuser to fetch.
     */
    where?: tbl_sysuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sysusers to fetch.
     */
    orderBy?: Enumerable<tbl_sysuserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_sysusers.
     */
    cursor?: tbl_sysuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sysusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sysusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_sysusers.
     */
    distinct?: Enumerable<Tbl_sysuserScalarFieldEnum>
  }

  /**
   * tbl_sysuser findFirst
   */
  export interface tbl_sysuserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends tbl_sysuserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_sysuser findFirstOrThrow
   */
  export type tbl_sysuserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sysuser
     */
    select?: tbl_sysuserSelect<ExtArgs> | null
    /**
     * Filter, which tbl_sysuser to fetch.
     */
    where?: tbl_sysuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sysusers to fetch.
     */
    orderBy?: Enumerable<tbl_sysuserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_sysusers.
     */
    cursor?: tbl_sysuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sysusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sysusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_sysusers.
     */
    distinct?: Enumerable<Tbl_sysuserScalarFieldEnum>
  }


  /**
   * tbl_sysuser findMany
   */
  export type tbl_sysuserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sysuser
     */
    select?: tbl_sysuserSelect<ExtArgs> | null
    /**
     * Filter, which tbl_sysusers to fetch.
     */
    where?: tbl_sysuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sysusers to fetch.
     */
    orderBy?: Enumerable<tbl_sysuserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_sysusers.
     */
    cursor?: tbl_sysuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sysusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sysusers.
     */
    skip?: number
    distinct?: Enumerable<Tbl_sysuserScalarFieldEnum>
  }


  /**
   * tbl_sysuser create
   */
  export type tbl_sysuserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sysuser
     */
    select?: tbl_sysuserSelect<ExtArgs> | null
    /**
     * The data needed to create a tbl_sysuser.
     */
    data?: XOR<tbl_sysuserCreateInput, tbl_sysuserUncheckedCreateInput>
  }


  /**
   * tbl_sysuser createMany
   */
  export type tbl_sysuserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_sysusers.
     */
    data: Enumerable<tbl_sysuserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tbl_sysuser update
   */
  export type tbl_sysuserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sysuser
     */
    select?: tbl_sysuserSelect<ExtArgs> | null
    /**
     * The data needed to update a tbl_sysuser.
     */
    data: XOR<tbl_sysuserUpdateInput, tbl_sysuserUncheckedUpdateInput>
    /**
     * Choose, which tbl_sysuser to update.
     */
    where: tbl_sysuserWhereUniqueInput
  }


  /**
   * tbl_sysuser updateMany
   */
  export type tbl_sysuserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_sysusers.
     */
    data: XOR<tbl_sysuserUpdateManyMutationInput, tbl_sysuserUncheckedUpdateManyInput>
    /**
     * Filter which tbl_sysusers to update
     */
    where?: tbl_sysuserWhereInput
  }


  /**
   * tbl_sysuser upsert
   */
  export type tbl_sysuserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sysuser
     */
    select?: tbl_sysuserSelect<ExtArgs> | null
    /**
     * The filter to search for the tbl_sysuser to update in case it exists.
     */
    where: tbl_sysuserWhereUniqueInput
    /**
     * In case the tbl_sysuser found by the `where` argument doesn't exist, create a new tbl_sysuser with this data.
     */
    create: XOR<tbl_sysuserCreateInput, tbl_sysuserUncheckedCreateInput>
    /**
     * In case the tbl_sysuser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_sysuserUpdateInput, tbl_sysuserUncheckedUpdateInput>
  }


  /**
   * tbl_sysuser delete
   */
  export type tbl_sysuserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sysuser
     */
    select?: tbl_sysuserSelect<ExtArgs> | null
    /**
     * Filter which tbl_sysuser to delete.
     */
    where: tbl_sysuserWhereUniqueInput
  }


  /**
   * tbl_sysuser deleteMany
   */
  export type tbl_sysuserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_sysusers to delete
     */
    where?: tbl_sysuserWhereInput
  }


  /**
   * tbl_sysuser without action
   */
  export type tbl_sysuserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sysuser
     */
    select?: tbl_sysuserSelect<ExtArgs> | null
  }



  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: Role | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: Role | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password: string
    role: Role
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersArgs> = $Types.GetResult<UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? Prisma__UsersClient<$Types.GetResult<UsersPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UsersClient<$Types.GetResult<UsersPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Types.GetResult<UsersPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? Prisma__UsersClient<$Types.GetResult<UsersPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UsersClient<$Types.GetResult<UsersPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Types.GetResult<UsersPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UsersPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Types.GetResult<UsersPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Types.GetResult<UsersPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Types.GetResult<UsersPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Types.GetResult<UsersPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Users base type for findUnique actions
   */
  export type UsersFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUnique
   */
  export interface UsersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UsersFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users base type for findFirst actions
   */
  export type UsersFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * Users findFirst
   */
  export interface UsersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UsersFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users without action
   */
  export type UsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tbl_gtransScalarFieldEnum: {
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

  export type Tbl_gtransScalarFieldEnum = (typeof Tbl_gtransScalarFieldEnum)[keyof typeof Tbl_gtransScalarFieldEnum]


  export const Tbl_logsScalarFieldEnum: {
    logid: 'logid',
    logdt: 'logdt',
    logtype: 'logtype',
    logref: 'logref',
    logtext: 'logtext'
  };

  export type Tbl_logsScalarFieldEnum = (typeof Tbl_logsScalarFieldEnum)[keyof typeof Tbl_logsScalarFieldEnum]


  export const Tbl_outletScalarFieldEnum: {
    olid: 'olid',
    olregion: 'olregion',
    olcity: 'olcity',
    oltsp: 'oltsp',
    olname: 'olname',
    oladd: 'oladd',
    olwratio: 'olwratio',
    olcreated: 'olcreated'
  };

  export type Tbl_outletScalarFieldEnum = (typeof Tbl_outletScalarFieldEnum)[keyof typeof Tbl_outletScalarFieldEnum]


  export const Tbl_salepersonScalarFieldEnum: {
    spid: 'spid',
    spfullname: 'spfullname',
    spmobile: 'spmobile',
    spcreated: 'spcreated',
    spstatus: 'spstatus'
  };

  export type Tbl_salepersonScalarFieldEnum = (typeof Tbl_salepersonScalarFieldEnum)[keyof typeof Tbl_salepersonScalarFieldEnum]


  export const Tbl_settingsScalarFieldEnum: {
    setid: 'setid',
    settitle: 'settitle',
    setvalue: 'setvalue'
  };

  export type Tbl_settingsScalarFieldEnum = (typeof Tbl_settingsScalarFieldEnum)[keyof typeof Tbl_settingsScalarFieldEnum]


  export const Tbl_surveyScalarFieldEnum: {
    svid: 'svid',
    svq: 'svq',
    sva1: 'sva1',
    sva2: 'sva2',
    sva3: 'sva3'
  };

  export type Tbl_surveyScalarFieldEnum = (typeof Tbl_surveyScalarFieldEnum)[keyof typeof Tbl_surveyScalarFieldEnum]


  export const Tbl_sysuserScalarFieldEnum: {
    sysuid: 'sysuid',
    sysufulln: 'sysufulln',
    sysumobile: 'sysumobile',
    sysuemail: 'sysuemail',
    sysuauth: 'sysuauth',
    sysutype: 'sysutype',
    sysucreated: 'sysucreated'
  };

  export type Tbl_sysuserScalarFieldEnum = (typeof Tbl_sysuserScalarFieldEnum)[keyof typeof Tbl_sysuserScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tbl_gtransWhereInput = {
    AND?: Enumerable<tbl_gtransWhereInput>
    OR?: Enumerable<tbl_gtransWhereInput>
    NOT?: Enumerable<tbl_gtransWhereInput>
    gtid?: IntFilter<"tbl_gtrans"> | number
    olcity?: StringNullableFilter<"tbl_gtrans"> | string | null
    oltsp?: StringNullableFilter<"tbl_gtrans"> | string | null
    olname?: StringNullableFilter<"tbl_gtrans"> | string | null
    gcarange?: StringNullableFilter<"tbl_gtrans"> | string | null
    gcumobile?: StringNullableFilter<"tbl_gtrans"> | string | null
    gcwinitem?: StringNullableFilter<"tbl_gtrans"> | string | null
    sa?: StringNullableFilter<"tbl_gtrans"> | string | null
    sb?: StringNullableFilter<"tbl_gtrans"> | string | null
    sc?: StringNullableFilter<"tbl_gtrans"> | string | null
    gstatus?: StringNullableFilter<"tbl_gtrans"> | string | null
    gdt?: DateTimeFilter<"tbl_gtrans"> | Date | string
  }

  export type tbl_gtransOrderByWithRelationInput = {
    gtid?: SortOrder
    olcity?: SortOrderInput | SortOrder
    oltsp?: SortOrderInput | SortOrder
    olname?: SortOrderInput | SortOrder
    gcarange?: SortOrderInput | SortOrder
    gcumobile?: SortOrderInput | SortOrder
    gcwinitem?: SortOrderInput | SortOrder
    sa?: SortOrderInput | SortOrder
    sb?: SortOrderInput | SortOrder
    sc?: SortOrderInput | SortOrder
    gstatus?: SortOrderInput | SortOrder
    gdt?: SortOrder
  }

  export type tbl_gtransWhereUniqueInput = Prisma.AtLeast<{
    gtid?: number
    AND?: Enumerable<tbl_gtransWhereInput>
    OR?: Enumerable<tbl_gtransWhereInput>
    NOT?: Enumerable<tbl_gtransWhereInput>
    olcity?: StringNullableFilter<"tbl_gtrans"> | string | null
    oltsp?: StringNullableFilter<"tbl_gtrans"> | string | null
    olname?: StringNullableFilter<"tbl_gtrans"> | string | null
    gcarange?: StringNullableFilter<"tbl_gtrans"> | string | null
    gcumobile?: StringNullableFilter<"tbl_gtrans"> | string | null
    gcwinitem?: StringNullableFilter<"tbl_gtrans"> | string | null
    sa?: StringNullableFilter<"tbl_gtrans"> | string | null
    sb?: StringNullableFilter<"tbl_gtrans"> | string | null
    sc?: StringNullableFilter<"tbl_gtrans"> | string | null
    gstatus?: StringNullableFilter<"tbl_gtrans"> | string | null
    gdt?: DateTimeFilter<"tbl_gtrans"> | Date | string
  }, "gtid">

  export type tbl_gtransOrderByWithAggregationInput = {
    gtid?: SortOrder
    olcity?: SortOrderInput | SortOrder
    oltsp?: SortOrderInput | SortOrder
    olname?: SortOrderInput | SortOrder
    gcarange?: SortOrderInput | SortOrder
    gcumobile?: SortOrderInput | SortOrder
    gcwinitem?: SortOrderInput | SortOrder
    sa?: SortOrderInput | SortOrder
    sb?: SortOrderInput | SortOrder
    sc?: SortOrderInput | SortOrder
    gstatus?: SortOrderInput | SortOrder
    gdt?: SortOrder
    _count?: tbl_gtransCountOrderByAggregateInput
    _avg?: tbl_gtransAvgOrderByAggregateInput
    _max?: tbl_gtransMaxOrderByAggregateInput
    _min?: tbl_gtransMinOrderByAggregateInput
    _sum?: tbl_gtransSumOrderByAggregateInput
  }

  export type tbl_gtransScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tbl_gtransScalarWhereWithAggregatesInput>
    OR?: Enumerable<tbl_gtransScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tbl_gtransScalarWhereWithAggregatesInput>
    gtid?: IntWithAggregatesFilter<"tbl_gtrans"> | number
    olcity?: StringNullableWithAggregatesFilter<"tbl_gtrans"> | string | null
    oltsp?: StringNullableWithAggregatesFilter<"tbl_gtrans"> | string | null
    olname?: StringNullableWithAggregatesFilter<"tbl_gtrans"> | string | null
    gcarange?: StringNullableWithAggregatesFilter<"tbl_gtrans"> | string | null
    gcumobile?: StringNullableWithAggregatesFilter<"tbl_gtrans"> | string | null
    gcwinitem?: StringNullableWithAggregatesFilter<"tbl_gtrans"> | string | null
    sa?: StringNullableWithAggregatesFilter<"tbl_gtrans"> | string | null
    sb?: StringNullableWithAggregatesFilter<"tbl_gtrans"> | string | null
    sc?: StringNullableWithAggregatesFilter<"tbl_gtrans"> | string | null
    gstatus?: StringNullableWithAggregatesFilter<"tbl_gtrans"> | string | null
    gdt?: DateTimeWithAggregatesFilter<"tbl_gtrans"> | Date | string
  }

  export type tbl_logsWhereInput = {
    AND?: Enumerable<tbl_logsWhereInput>
    OR?: Enumerable<tbl_logsWhereInput>
    NOT?: Enumerable<tbl_logsWhereInput>
    logid?: IntFilter<"tbl_logs"> | number
    logdt?: DateTimeNullableFilter<"tbl_logs"> | Date | string | null
    logtype?: StringNullableFilter<"tbl_logs"> | string | null
    logref?: StringNullableFilter<"tbl_logs"> | string | null
    logtext?: StringNullableFilter<"tbl_logs"> | string | null
  }

  export type tbl_logsOrderByWithRelationInput = {
    logid?: SortOrder
    logdt?: SortOrderInput | SortOrder
    logtype?: SortOrderInput | SortOrder
    logref?: SortOrderInput | SortOrder
    logtext?: SortOrderInput | SortOrder
  }

  export type tbl_logsWhereUniqueInput = Prisma.AtLeast<{
    logid?: number
    AND?: Enumerable<tbl_logsWhereInput>
    OR?: Enumerable<tbl_logsWhereInput>
    NOT?: Enumerable<tbl_logsWhereInput>
    logdt?: DateTimeNullableFilter<"tbl_logs"> | Date | string | null
    logtype?: StringNullableFilter<"tbl_logs"> | string | null
    logref?: StringNullableFilter<"tbl_logs"> | string | null
    logtext?: StringNullableFilter<"tbl_logs"> | string | null
  }, "logid">

  export type tbl_logsOrderByWithAggregationInput = {
    logid?: SortOrder
    logdt?: SortOrderInput | SortOrder
    logtype?: SortOrderInput | SortOrder
    logref?: SortOrderInput | SortOrder
    logtext?: SortOrderInput | SortOrder
    _count?: tbl_logsCountOrderByAggregateInput
    _avg?: tbl_logsAvgOrderByAggregateInput
    _max?: tbl_logsMaxOrderByAggregateInput
    _min?: tbl_logsMinOrderByAggregateInput
    _sum?: tbl_logsSumOrderByAggregateInput
  }

  export type tbl_logsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tbl_logsScalarWhereWithAggregatesInput>
    OR?: Enumerable<tbl_logsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tbl_logsScalarWhereWithAggregatesInput>
    logid?: IntWithAggregatesFilter<"tbl_logs"> | number
    logdt?: DateTimeNullableWithAggregatesFilter<"tbl_logs"> | Date | string | null
    logtype?: StringNullableWithAggregatesFilter<"tbl_logs"> | string | null
    logref?: StringNullableWithAggregatesFilter<"tbl_logs"> | string | null
    logtext?: StringNullableWithAggregatesFilter<"tbl_logs"> | string | null
  }

  export type tbl_outletWhereInput = {
    AND?: Enumerable<tbl_outletWhereInput>
    OR?: Enumerable<tbl_outletWhereInput>
    NOT?: Enumerable<tbl_outletWhereInput>
    olid?: IntFilter<"tbl_outlet"> | number
    olregion?: StringNullableFilter<"tbl_outlet"> | string | null
    olcity?: StringNullableFilter<"tbl_outlet"> | string | null
    oltsp?: StringNullableFilter<"tbl_outlet"> | string | null
    olname?: StringNullableFilter<"tbl_outlet"> | string | null
    oladd?: StringNullableFilter<"tbl_outlet"> | string | null
    olwratio?: StringNullableFilter<"tbl_outlet"> | string | null
    olcreated?: DateTimeNullableFilter<"tbl_outlet"> | Date | string | null
  }

  export type tbl_outletOrderByWithRelationInput = {
    olid?: SortOrder
    olregion?: SortOrderInput | SortOrder
    olcity?: SortOrderInput | SortOrder
    oltsp?: SortOrderInput | SortOrder
    olname?: SortOrderInput | SortOrder
    oladd?: SortOrderInput | SortOrder
    olwratio?: SortOrderInput | SortOrder
    olcreated?: SortOrderInput | SortOrder
  }

  export type tbl_outletWhereUniqueInput = Prisma.AtLeast<{
    olid?: number
    AND?: Enumerable<tbl_outletWhereInput>
    OR?: Enumerable<tbl_outletWhereInput>
    NOT?: Enumerable<tbl_outletWhereInput>
    olregion?: StringNullableFilter<"tbl_outlet"> | string | null
    olcity?: StringNullableFilter<"tbl_outlet"> | string | null
    oltsp?: StringNullableFilter<"tbl_outlet"> | string | null
    olname?: StringNullableFilter<"tbl_outlet"> | string | null
    oladd?: StringNullableFilter<"tbl_outlet"> | string | null
    olwratio?: StringNullableFilter<"tbl_outlet"> | string | null
    olcreated?: DateTimeNullableFilter<"tbl_outlet"> | Date | string | null
  }, "olid">

  export type tbl_outletOrderByWithAggregationInput = {
    olid?: SortOrder
    olregion?: SortOrderInput | SortOrder
    olcity?: SortOrderInput | SortOrder
    oltsp?: SortOrderInput | SortOrder
    olname?: SortOrderInput | SortOrder
    oladd?: SortOrderInput | SortOrder
    olwratio?: SortOrderInput | SortOrder
    olcreated?: SortOrderInput | SortOrder
    _count?: tbl_outletCountOrderByAggregateInput
    _avg?: tbl_outletAvgOrderByAggregateInput
    _max?: tbl_outletMaxOrderByAggregateInput
    _min?: tbl_outletMinOrderByAggregateInput
    _sum?: tbl_outletSumOrderByAggregateInput
  }

  export type tbl_outletScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tbl_outletScalarWhereWithAggregatesInput>
    OR?: Enumerable<tbl_outletScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tbl_outletScalarWhereWithAggregatesInput>
    olid?: IntWithAggregatesFilter<"tbl_outlet"> | number
    olregion?: StringNullableWithAggregatesFilter<"tbl_outlet"> | string | null
    olcity?: StringNullableWithAggregatesFilter<"tbl_outlet"> | string | null
    oltsp?: StringNullableWithAggregatesFilter<"tbl_outlet"> | string | null
    olname?: StringNullableWithAggregatesFilter<"tbl_outlet"> | string | null
    oladd?: StringNullableWithAggregatesFilter<"tbl_outlet"> | string | null
    olwratio?: StringNullableWithAggregatesFilter<"tbl_outlet"> | string | null
    olcreated?: DateTimeNullableWithAggregatesFilter<"tbl_outlet"> | Date | string | null
  }

  export type tbl_salepersonWhereInput = {
    AND?: Enumerable<tbl_salepersonWhereInput>
    OR?: Enumerable<tbl_salepersonWhereInput>
    NOT?: Enumerable<tbl_salepersonWhereInput>
    spid?: IntFilter<"tbl_saleperson"> | number
    spfullname?: StringNullableFilter<"tbl_saleperson"> | string | null
    spmobile?: StringNullableFilter<"tbl_saleperson"> | string | null
    spcreated?: DateTimeNullableFilter<"tbl_saleperson"> | Date | string | null
    spstatus?: StringNullableFilter<"tbl_saleperson"> | string | null
  }

  export type tbl_salepersonOrderByWithRelationInput = {
    spid?: SortOrder
    spfullname?: SortOrderInput | SortOrder
    spmobile?: SortOrderInput | SortOrder
    spcreated?: SortOrderInput | SortOrder
    spstatus?: SortOrderInput | SortOrder
  }

  export type tbl_salepersonWhereUniqueInput = Prisma.AtLeast<{
    spid?: number
    spmobile?: string
    AND?: Enumerable<tbl_salepersonWhereInput>
    OR?: Enumerable<tbl_salepersonWhereInput>
    NOT?: Enumerable<tbl_salepersonWhereInput>
    spfullname?: StringNullableFilter<"tbl_saleperson"> | string | null
    spcreated?: DateTimeNullableFilter<"tbl_saleperson"> | Date | string | null
    spstatus?: StringNullableFilter<"tbl_saleperson"> | string | null
  }, "spid" | "spmobile">

  export type tbl_salepersonOrderByWithAggregationInput = {
    spid?: SortOrder
    spfullname?: SortOrderInput | SortOrder
    spmobile?: SortOrderInput | SortOrder
    spcreated?: SortOrderInput | SortOrder
    spstatus?: SortOrderInput | SortOrder
    _count?: tbl_salepersonCountOrderByAggregateInput
    _avg?: tbl_salepersonAvgOrderByAggregateInput
    _max?: tbl_salepersonMaxOrderByAggregateInput
    _min?: tbl_salepersonMinOrderByAggregateInput
    _sum?: tbl_salepersonSumOrderByAggregateInput
  }

  export type tbl_salepersonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tbl_salepersonScalarWhereWithAggregatesInput>
    OR?: Enumerable<tbl_salepersonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tbl_salepersonScalarWhereWithAggregatesInput>
    spid?: IntWithAggregatesFilter<"tbl_saleperson"> | number
    spfullname?: StringNullableWithAggregatesFilter<"tbl_saleperson"> | string | null
    spmobile?: StringNullableWithAggregatesFilter<"tbl_saleperson"> | string | null
    spcreated?: DateTimeNullableWithAggregatesFilter<"tbl_saleperson"> | Date | string | null
    spstatus?: StringNullableWithAggregatesFilter<"tbl_saleperson"> | string | null
  }

  export type tbl_settingsWhereInput = {
    AND?: Enumerable<tbl_settingsWhereInput>
    OR?: Enumerable<tbl_settingsWhereInput>
    NOT?: Enumerable<tbl_settingsWhereInput>
    setid?: IntFilter<"tbl_settings"> | number
    settitle?: StringNullableFilter<"tbl_settings"> | string | null
    setvalue?: StringNullableFilter<"tbl_settings"> | string | null
  }

  export type tbl_settingsOrderByWithRelationInput = {
    setid?: SortOrder
    settitle?: SortOrderInput | SortOrder
    setvalue?: SortOrderInput | SortOrder
  }

  export type tbl_settingsWhereUniqueInput = Prisma.AtLeast<{
    setid?: number
    AND?: Enumerable<tbl_settingsWhereInput>
    OR?: Enumerable<tbl_settingsWhereInput>
    NOT?: Enumerable<tbl_settingsWhereInput>
    settitle?: StringNullableFilter<"tbl_settings"> | string | null
    setvalue?: StringNullableFilter<"tbl_settings"> | string | null
  }, "setid">

  export type tbl_settingsOrderByWithAggregationInput = {
    setid?: SortOrder
    settitle?: SortOrderInput | SortOrder
    setvalue?: SortOrderInput | SortOrder
    _count?: tbl_settingsCountOrderByAggregateInput
    _avg?: tbl_settingsAvgOrderByAggregateInput
    _max?: tbl_settingsMaxOrderByAggregateInput
    _min?: tbl_settingsMinOrderByAggregateInput
    _sum?: tbl_settingsSumOrderByAggregateInput
  }

  export type tbl_settingsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tbl_settingsScalarWhereWithAggregatesInput>
    OR?: Enumerable<tbl_settingsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tbl_settingsScalarWhereWithAggregatesInput>
    setid?: IntWithAggregatesFilter<"tbl_settings"> | number
    settitle?: StringNullableWithAggregatesFilter<"tbl_settings"> | string | null
    setvalue?: StringNullableWithAggregatesFilter<"tbl_settings"> | string | null
  }

  export type tbl_surveyWhereInput = {
    AND?: Enumerable<tbl_surveyWhereInput>
    OR?: Enumerable<tbl_surveyWhereInput>
    NOT?: Enumerable<tbl_surveyWhereInput>
    svid?: IntFilter<"tbl_survey"> | number
    svq?: StringNullableFilter<"tbl_survey"> | string | null
    sva1?: StringNullableFilter<"tbl_survey"> | string | null
    sva2?: StringNullableFilter<"tbl_survey"> | string | null
    sva3?: StringNullableFilter<"tbl_survey"> | string | null
  }

  export type tbl_surveyOrderByWithRelationInput = {
    svid?: SortOrder
    svq?: SortOrderInput | SortOrder
    sva1?: SortOrderInput | SortOrder
    sva2?: SortOrderInput | SortOrder
    sva3?: SortOrderInput | SortOrder
  }

  export type tbl_surveyWhereUniqueInput = Prisma.AtLeast<{
    svid?: number
    AND?: Enumerable<tbl_surveyWhereInput>
    OR?: Enumerable<tbl_surveyWhereInput>
    NOT?: Enumerable<tbl_surveyWhereInput>
    svq?: StringNullableFilter<"tbl_survey"> | string | null
    sva1?: StringNullableFilter<"tbl_survey"> | string | null
    sva2?: StringNullableFilter<"tbl_survey"> | string | null
    sva3?: StringNullableFilter<"tbl_survey"> | string | null
  }, "svid">

  export type tbl_surveyOrderByWithAggregationInput = {
    svid?: SortOrder
    svq?: SortOrderInput | SortOrder
    sva1?: SortOrderInput | SortOrder
    sva2?: SortOrderInput | SortOrder
    sva3?: SortOrderInput | SortOrder
    _count?: tbl_surveyCountOrderByAggregateInput
    _avg?: tbl_surveyAvgOrderByAggregateInput
    _max?: tbl_surveyMaxOrderByAggregateInput
    _min?: tbl_surveyMinOrderByAggregateInput
    _sum?: tbl_surveySumOrderByAggregateInput
  }

  export type tbl_surveyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tbl_surveyScalarWhereWithAggregatesInput>
    OR?: Enumerable<tbl_surveyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tbl_surveyScalarWhereWithAggregatesInput>
    svid?: IntWithAggregatesFilter<"tbl_survey"> | number
    svq?: StringNullableWithAggregatesFilter<"tbl_survey"> | string | null
    sva1?: StringNullableWithAggregatesFilter<"tbl_survey"> | string | null
    sva2?: StringNullableWithAggregatesFilter<"tbl_survey"> | string | null
    sva3?: StringNullableWithAggregatesFilter<"tbl_survey"> | string | null
  }

  export type tbl_sysuserWhereInput = {
    AND?: Enumerable<tbl_sysuserWhereInput>
    OR?: Enumerable<tbl_sysuserWhereInput>
    NOT?: Enumerable<tbl_sysuserWhereInput>
    sysuid?: IntFilter<"tbl_sysuser"> | number
    sysufulln?: StringNullableFilter<"tbl_sysuser"> | string | null
    sysumobile?: StringNullableFilter<"tbl_sysuser"> | string | null
    sysuemail?: StringNullableFilter<"tbl_sysuser"> | string | null
    sysuauth?: StringNullableFilter<"tbl_sysuser"> | string | null
    sysutype?: StringNullableFilter<"tbl_sysuser"> | string | null
    sysucreated?: DateTimeNullableFilter<"tbl_sysuser"> | Date | string | null
  }

  export type tbl_sysuserOrderByWithRelationInput = {
    sysuid?: SortOrder
    sysufulln?: SortOrderInput | SortOrder
    sysumobile?: SortOrderInput | SortOrder
    sysuemail?: SortOrderInput | SortOrder
    sysuauth?: SortOrderInput | SortOrder
    sysutype?: SortOrderInput | SortOrder
    sysucreated?: SortOrderInput | SortOrder
  }

  export type tbl_sysuserWhereUniqueInput = Prisma.AtLeast<{
    sysuid?: number
    AND?: Enumerable<tbl_sysuserWhereInput>
    OR?: Enumerable<tbl_sysuserWhereInput>
    NOT?: Enumerable<tbl_sysuserWhereInput>
    sysufulln?: StringNullableFilter<"tbl_sysuser"> | string | null
    sysumobile?: StringNullableFilter<"tbl_sysuser"> | string | null
    sysuemail?: StringNullableFilter<"tbl_sysuser"> | string | null
    sysuauth?: StringNullableFilter<"tbl_sysuser"> | string | null
    sysutype?: StringNullableFilter<"tbl_sysuser"> | string | null
    sysucreated?: DateTimeNullableFilter<"tbl_sysuser"> | Date | string | null
  }, "sysuid">

  export type tbl_sysuserOrderByWithAggregationInput = {
    sysuid?: SortOrder
    sysufulln?: SortOrderInput | SortOrder
    sysumobile?: SortOrderInput | SortOrder
    sysuemail?: SortOrderInput | SortOrder
    sysuauth?: SortOrderInput | SortOrder
    sysutype?: SortOrderInput | SortOrder
    sysucreated?: SortOrderInput | SortOrder
    _count?: tbl_sysuserCountOrderByAggregateInput
    _avg?: tbl_sysuserAvgOrderByAggregateInput
    _max?: tbl_sysuserMaxOrderByAggregateInput
    _min?: tbl_sysuserMinOrderByAggregateInput
    _sum?: tbl_sysuserSumOrderByAggregateInput
  }

  export type tbl_sysuserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tbl_sysuserScalarWhereWithAggregatesInput>
    OR?: Enumerable<tbl_sysuserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tbl_sysuserScalarWhereWithAggregatesInput>
    sysuid?: IntWithAggregatesFilter<"tbl_sysuser"> | number
    sysufulln?: StringNullableWithAggregatesFilter<"tbl_sysuser"> | string | null
    sysumobile?: StringNullableWithAggregatesFilter<"tbl_sysuser"> | string | null
    sysuemail?: StringNullableWithAggregatesFilter<"tbl_sysuser"> | string | null
    sysuauth?: StringNullableWithAggregatesFilter<"tbl_sysuser"> | string | null
    sysutype?: StringNullableWithAggregatesFilter<"tbl_sysuser"> | string | null
    sysucreated?: DateTimeNullableWithAggregatesFilter<"tbl_sysuser"> | Date | string | null
  }

  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    id?: IntFilter<"Users"> | number
    name?: StringNullableFilter<"Users"> | string | null
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | Role
    is_active?: BoolFilter<"Users"> | boolean
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    name?: StringNullableFilter<"Users"> | string | null
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | Role
    is_active?: BoolFilter<"Users"> | boolean
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | Role
    is_active?: BoolWithAggregatesFilter<"Users"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type tbl_gtransCreateInput = {
    olcity?: string | null
    oltsp?: string | null
    olname?: string | null
    gcarange?: string | null
    gcumobile?: string | null
    gcwinitem?: string | null
    sa?: string | null
    sb?: string | null
    sc?: string | null
    gstatus?: string | null
    gdt?: Date | string
  }

  export type tbl_gtransUncheckedCreateInput = {
    gtid?: number
    olcity?: string | null
    oltsp?: string | null
    olname?: string | null
    gcarange?: string | null
    gcumobile?: string | null
    gcwinitem?: string | null
    sa?: string | null
    sb?: string | null
    sc?: string | null
    gstatus?: string | null
    gdt?: Date | string
  }

  export type tbl_gtransUpdateInput = {
    olcity?: NullableStringFieldUpdateOperationsInput | string | null
    oltsp?: NullableStringFieldUpdateOperationsInput | string | null
    olname?: NullableStringFieldUpdateOperationsInput | string | null
    gcarange?: NullableStringFieldUpdateOperationsInput | string | null
    gcumobile?: NullableStringFieldUpdateOperationsInput | string | null
    gcwinitem?: NullableStringFieldUpdateOperationsInput | string | null
    sa?: NullableStringFieldUpdateOperationsInput | string | null
    sb?: NullableStringFieldUpdateOperationsInput | string | null
    sc?: NullableStringFieldUpdateOperationsInput | string | null
    gstatus?: NullableStringFieldUpdateOperationsInput | string | null
    gdt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_gtransUncheckedUpdateInput = {
    gtid?: IntFieldUpdateOperationsInput | number
    olcity?: NullableStringFieldUpdateOperationsInput | string | null
    oltsp?: NullableStringFieldUpdateOperationsInput | string | null
    olname?: NullableStringFieldUpdateOperationsInput | string | null
    gcarange?: NullableStringFieldUpdateOperationsInput | string | null
    gcumobile?: NullableStringFieldUpdateOperationsInput | string | null
    gcwinitem?: NullableStringFieldUpdateOperationsInput | string | null
    sa?: NullableStringFieldUpdateOperationsInput | string | null
    sb?: NullableStringFieldUpdateOperationsInput | string | null
    sc?: NullableStringFieldUpdateOperationsInput | string | null
    gstatus?: NullableStringFieldUpdateOperationsInput | string | null
    gdt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_gtransCreateManyInput = {
    gtid?: number
    olcity?: string | null
    oltsp?: string | null
    olname?: string | null
    gcarange?: string | null
    gcumobile?: string | null
    gcwinitem?: string | null
    sa?: string | null
    sb?: string | null
    sc?: string | null
    gstatus?: string | null
    gdt?: Date | string
  }

  export type tbl_gtransUpdateManyMutationInput = {
    olcity?: NullableStringFieldUpdateOperationsInput | string | null
    oltsp?: NullableStringFieldUpdateOperationsInput | string | null
    olname?: NullableStringFieldUpdateOperationsInput | string | null
    gcarange?: NullableStringFieldUpdateOperationsInput | string | null
    gcumobile?: NullableStringFieldUpdateOperationsInput | string | null
    gcwinitem?: NullableStringFieldUpdateOperationsInput | string | null
    sa?: NullableStringFieldUpdateOperationsInput | string | null
    sb?: NullableStringFieldUpdateOperationsInput | string | null
    sc?: NullableStringFieldUpdateOperationsInput | string | null
    gstatus?: NullableStringFieldUpdateOperationsInput | string | null
    gdt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_gtransUncheckedUpdateManyInput = {
    gtid?: IntFieldUpdateOperationsInput | number
    olcity?: NullableStringFieldUpdateOperationsInput | string | null
    oltsp?: NullableStringFieldUpdateOperationsInput | string | null
    olname?: NullableStringFieldUpdateOperationsInput | string | null
    gcarange?: NullableStringFieldUpdateOperationsInput | string | null
    gcumobile?: NullableStringFieldUpdateOperationsInput | string | null
    gcwinitem?: NullableStringFieldUpdateOperationsInput | string | null
    sa?: NullableStringFieldUpdateOperationsInput | string | null
    sb?: NullableStringFieldUpdateOperationsInput | string | null
    sc?: NullableStringFieldUpdateOperationsInput | string | null
    gstatus?: NullableStringFieldUpdateOperationsInput | string | null
    gdt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_logsCreateInput = {
    logdt?: Date | string | null
    logtype?: string | null
    logref?: string | null
    logtext?: string | null
  }

  export type tbl_logsUncheckedCreateInput = {
    logid?: number
    logdt?: Date | string | null
    logtype?: string | null
    logref?: string | null
    logtext?: string | null
  }

  export type tbl_logsUpdateInput = {
    logdt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logtype?: NullableStringFieldUpdateOperationsInput | string | null
    logref?: NullableStringFieldUpdateOperationsInput | string | null
    logtext?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_logsUncheckedUpdateInput = {
    logid?: IntFieldUpdateOperationsInput | number
    logdt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logtype?: NullableStringFieldUpdateOperationsInput | string | null
    logref?: NullableStringFieldUpdateOperationsInput | string | null
    logtext?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_logsCreateManyInput = {
    logid?: number
    logdt?: Date | string | null
    logtype?: string | null
    logref?: string | null
    logtext?: string | null
  }

  export type tbl_logsUpdateManyMutationInput = {
    logdt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logtype?: NullableStringFieldUpdateOperationsInput | string | null
    logref?: NullableStringFieldUpdateOperationsInput | string | null
    logtext?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_logsUncheckedUpdateManyInput = {
    logid?: IntFieldUpdateOperationsInput | number
    logdt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logtype?: NullableStringFieldUpdateOperationsInput | string | null
    logref?: NullableStringFieldUpdateOperationsInput | string | null
    logtext?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_outletCreateInput = {
    olregion?: string | null
    olcity?: string | null
    oltsp?: string | null
    olname?: string | null
    oladd?: string | null
    olwratio?: string | null
    olcreated?: Date | string | null
  }

  export type tbl_outletUncheckedCreateInput = {
    olid?: number
    olregion?: string | null
    olcity?: string | null
    oltsp?: string | null
    olname?: string | null
    oladd?: string | null
    olwratio?: string | null
    olcreated?: Date | string | null
  }

  export type tbl_outletUpdateInput = {
    olregion?: NullableStringFieldUpdateOperationsInput | string | null
    olcity?: NullableStringFieldUpdateOperationsInput | string | null
    oltsp?: NullableStringFieldUpdateOperationsInput | string | null
    olname?: NullableStringFieldUpdateOperationsInput | string | null
    oladd?: NullableStringFieldUpdateOperationsInput | string | null
    olwratio?: NullableStringFieldUpdateOperationsInput | string | null
    olcreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_outletUncheckedUpdateInput = {
    olid?: IntFieldUpdateOperationsInput | number
    olregion?: NullableStringFieldUpdateOperationsInput | string | null
    olcity?: NullableStringFieldUpdateOperationsInput | string | null
    oltsp?: NullableStringFieldUpdateOperationsInput | string | null
    olname?: NullableStringFieldUpdateOperationsInput | string | null
    oladd?: NullableStringFieldUpdateOperationsInput | string | null
    olwratio?: NullableStringFieldUpdateOperationsInput | string | null
    olcreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_outletCreateManyInput = {
    olid?: number
    olregion?: string | null
    olcity?: string | null
    oltsp?: string | null
    olname?: string | null
    oladd?: string | null
    olwratio?: string | null
    olcreated?: Date | string | null
  }

  export type tbl_outletUpdateManyMutationInput = {
    olregion?: NullableStringFieldUpdateOperationsInput | string | null
    olcity?: NullableStringFieldUpdateOperationsInput | string | null
    oltsp?: NullableStringFieldUpdateOperationsInput | string | null
    olname?: NullableStringFieldUpdateOperationsInput | string | null
    oladd?: NullableStringFieldUpdateOperationsInput | string | null
    olwratio?: NullableStringFieldUpdateOperationsInput | string | null
    olcreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_outletUncheckedUpdateManyInput = {
    olid?: IntFieldUpdateOperationsInput | number
    olregion?: NullableStringFieldUpdateOperationsInput | string | null
    olcity?: NullableStringFieldUpdateOperationsInput | string | null
    oltsp?: NullableStringFieldUpdateOperationsInput | string | null
    olname?: NullableStringFieldUpdateOperationsInput | string | null
    oladd?: NullableStringFieldUpdateOperationsInput | string | null
    olwratio?: NullableStringFieldUpdateOperationsInput | string | null
    olcreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_salepersonCreateInput = {
    spfullname?: string | null
    spmobile?: string | null
    spcreated?: Date | string | null
    spstatus?: string | null
  }

  export type tbl_salepersonUncheckedCreateInput = {
    spid?: number
    spfullname?: string | null
    spmobile?: string | null
    spcreated?: Date | string | null
    spstatus?: string | null
  }

  export type tbl_salepersonUpdateInput = {
    spfullname?: NullableStringFieldUpdateOperationsInput | string | null
    spmobile?: NullableStringFieldUpdateOperationsInput | string | null
    spcreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spstatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_salepersonUncheckedUpdateInput = {
    spid?: IntFieldUpdateOperationsInput | number
    spfullname?: NullableStringFieldUpdateOperationsInput | string | null
    spmobile?: NullableStringFieldUpdateOperationsInput | string | null
    spcreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spstatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_salepersonCreateManyInput = {
    spid?: number
    spfullname?: string | null
    spmobile?: string | null
    spcreated?: Date | string | null
    spstatus?: string | null
  }

  export type tbl_salepersonUpdateManyMutationInput = {
    spfullname?: NullableStringFieldUpdateOperationsInput | string | null
    spmobile?: NullableStringFieldUpdateOperationsInput | string | null
    spcreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spstatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_salepersonUncheckedUpdateManyInput = {
    spid?: IntFieldUpdateOperationsInput | number
    spfullname?: NullableStringFieldUpdateOperationsInput | string | null
    spmobile?: NullableStringFieldUpdateOperationsInput | string | null
    spcreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spstatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_settingsCreateInput = {
    settitle?: string | null
    setvalue?: string | null
  }

  export type tbl_settingsUncheckedCreateInput = {
    setid?: number
    settitle?: string | null
    setvalue?: string | null
  }

  export type tbl_settingsUpdateInput = {
    settitle?: NullableStringFieldUpdateOperationsInput | string | null
    setvalue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_settingsUncheckedUpdateInput = {
    setid?: IntFieldUpdateOperationsInput | number
    settitle?: NullableStringFieldUpdateOperationsInput | string | null
    setvalue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_settingsCreateManyInput = {
    setid?: number
    settitle?: string | null
    setvalue?: string | null
  }

  export type tbl_settingsUpdateManyMutationInput = {
    settitle?: NullableStringFieldUpdateOperationsInput | string | null
    setvalue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_settingsUncheckedUpdateManyInput = {
    setid?: IntFieldUpdateOperationsInput | number
    settitle?: NullableStringFieldUpdateOperationsInput | string | null
    setvalue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_surveyCreateInput = {
    svq?: string | null
    sva1?: string | null
    sva2?: string | null
    sva3?: string | null
  }

  export type tbl_surveyUncheckedCreateInput = {
    svid?: number
    svq?: string | null
    sva1?: string | null
    sva2?: string | null
    sva3?: string | null
  }

  export type tbl_surveyUpdateInput = {
    svq?: NullableStringFieldUpdateOperationsInput | string | null
    sva1?: NullableStringFieldUpdateOperationsInput | string | null
    sva2?: NullableStringFieldUpdateOperationsInput | string | null
    sva3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_surveyUncheckedUpdateInput = {
    svid?: IntFieldUpdateOperationsInput | number
    svq?: NullableStringFieldUpdateOperationsInput | string | null
    sva1?: NullableStringFieldUpdateOperationsInput | string | null
    sva2?: NullableStringFieldUpdateOperationsInput | string | null
    sva3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_surveyCreateManyInput = {
    svid?: number
    svq?: string | null
    sva1?: string | null
    sva2?: string | null
    sva3?: string | null
  }

  export type tbl_surveyUpdateManyMutationInput = {
    svq?: NullableStringFieldUpdateOperationsInput | string | null
    sva1?: NullableStringFieldUpdateOperationsInput | string | null
    sva2?: NullableStringFieldUpdateOperationsInput | string | null
    sva3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_surveyUncheckedUpdateManyInput = {
    svid?: IntFieldUpdateOperationsInput | number
    svq?: NullableStringFieldUpdateOperationsInput | string | null
    sva1?: NullableStringFieldUpdateOperationsInput | string | null
    sva2?: NullableStringFieldUpdateOperationsInput | string | null
    sva3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_sysuserCreateInput = {
    sysufulln?: string | null
    sysumobile?: string | null
    sysuemail?: string | null
    sysuauth?: string | null
    sysutype?: string | null
    sysucreated?: Date | string | null
  }

  export type tbl_sysuserUncheckedCreateInput = {
    sysuid?: number
    sysufulln?: string | null
    sysumobile?: string | null
    sysuemail?: string | null
    sysuauth?: string | null
    sysutype?: string | null
    sysucreated?: Date | string | null
  }

  export type tbl_sysuserUpdateInput = {
    sysufulln?: NullableStringFieldUpdateOperationsInput | string | null
    sysumobile?: NullableStringFieldUpdateOperationsInput | string | null
    sysuemail?: NullableStringFieldUpdateOperationsInput | string | null
    sysuauth?: NullableStringFieldUpdateOperationsInput | string | null
    sysutype?: NullableStringFieldUpdateOperationsInput | string | null
    sysucreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_sysuserUncheckedUpdateInput = {
    sysuid?: IntFieldUpdateOperationsInput | number
    sysufulln?: NullableStringFieldUpdateOperationsInput | string | null
    sysumobile?: NullableStringFieldUpdateOperationsInput | string | null
    sysuemail?: NullableStringFieldUpdateOperationsInput | string | null
    sysuauth?: NullableStringFieldUpdateOperationsInput | string | null
    sysutype?: NullableStringFieldUpdateOperationsInput | string | null
    sysucreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_sysuserCreateManyInput = {
    sysuid?: number
    sysufulln?: string | null
    sysumobile?: string | null
    sysuemail?: string | null
    sysuauth?: string | null
    sysutype?: string | null
    sysucreated?: Date | string | null
  }

  export type tbl_sysuserUpdateManyMutationInput = {
    sysufulln?: NullableStringFieldUpdateOperationsInput | string | null
    sysumobile?: NullableStringFieldUpdateOperationsInput | string | null
    sysuemail?: NullableStringFieldUpdateOperationsInput | string | null
    sysuauth?: NullableStringFieldUpdateOperationsInput | string | null
    sysutype?: NullableStringFieldUpdateOperationsInput | string | null
    sysucreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_sysuserUncheckedUpdateManyInput = {
    sysuid?: IntFieldUpdateOperationsInput | number
    sysufulln?: NullableStringFieldUpdateOperationsInput | string | null
    sysumobile?: NullableStringFieldUpdateOperationsInput | string | null
    sysuemail?: NullableStringFieldUpdateOperationsInput | string | null
    sysuauth?: NullableStringFieldUpdateOperationsInput | string | null
    sysutype?: NullableStringFieldUpdateOperationsInput | string | null
    sysucreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateInput = {
    name?: string | null
    email: string
    password: string
    role?: Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tbl_gtransCountOrderByAggregateInput = {
    gtid?: SortOrder
    olcity?: SortOrder
    oltsp?: SortOrder
    olname?: SortOrder
    gcarange?: SortOrder
    gcumobile?: SortOrder
    gcwinitem?: SortOrder
    sa?: SortOrder
    sb?: SortOrder
    sc?: SortOrder
    gstatus?: SortOrder
    gdt?: SortOrder
  }

  export type tbl_gtransAvgOrderByAggregateInput = {
    gtid?: SortOrder
  }

  export type tbl_gtransMaxOrderByAggregateInput = {
    gtid?: SortOrder
    olcity?: SortOrder
    oltsp?: SortOrder
    olname?: SortOrder
    gcarange?: SortOrder
    gcumobile?: SortOrder
    gcwinitem?: SortOrder
    sa?: SortOrder
    sb?: SortOrder
    sc?: SortOrder
    gstatus?: SortOrder
    gdt?: SortOrder
  }

  export type tbl_gtransMinOrderByAggregateInput = {
    gtid?: SortOrder
    olcity?: SortOrder
    oltsp?: SortOrder
    olname?: SortOrder
    gcarange?: SortOrder
    gcumobile?: SortOrder
    gcwinitem?: SortOrder
    sa?: SortOrder
    sb?: SortOrder
    sc?: SortOrder
    gstatus?: SortOrder
    gdt?: SortOrder
  }

  export type tbl_gtransSumOrderByAggregateInput = {
    gtid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type tbl_logsCountOrderByAggregateInput = {
    logid?: SortOrder
    logdt?: SortOrder
    logtype?: SortOrder
    logref?: SortOrder
    logtext?: SortOrder
  }

  export type tbl_logsAvgOrderByAggregateInput = {
    logid?: SortOrder
  }

  export type tbl_logsMaxOrderByAggregateInput = {
    logid?: SortOrder
    logdt?: SortOrder
    logtype?: SortOrder
    logref?: SortOrder
    logtext?: SortOrder
  }

  export type tbl_logsMinOrderByAggregateInput = {
    logid?: SortOrder
    logdt?: SortOrder
    logtype?: SortOrder
    logref?: SortOrder
    logtext?: SortOrder
  }

  export type tbl_logsSumOrderByAggregateInput = {
    logid?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type tbl_outletCountOrderByAggregateInput = {
    olid?: SortOrder
    olregion?: SortOrder
    olcity?: SortOrder
    oltsp?: SortOrder
    olname?: SortOrder
    oladd?: SortOrder
    olwratio?: SortOrder
    olcreated?: SortOrder
  }

  export type tbl_outletAvgOrderByAggregateInput = {
    olid?: SortOrder
  }

  export type tbl_outletMaxOrderByAggregateInput = {
    olid?: SortOrder
    olregion?: SortOrder
    olcity?: SortOrder
    oltsp?: SortOrder
    olname?: SortOrder
    oladd?: SortOrder
    olwratio?: SortOrder
    olcreated?: SortOrder
  }

  export type tbl_outletMinOrderByAggregateInput = {
    olid?: SortOrder
    olregion?: SortOrder
    olcity?: SortOrder
    oltsp?: SortOrder
    olname?: SortOrder
    oladd?: SortOrder
    olwratio?: SortOrder
    olcreated?: SortOrder
  }

  export type tbl_outletSumOrderByAggregateInput = {
    olid?: SortOrder
  }

  export type tbl_salepersonCountOrderByAggregateInput = {
    spid?: SortOrder
    spfullname?: SortOrder
    spmobile?: SortOrder
    spcreated?: SortOrder
    spstatus?: SortOrder
  }

  export type tbl_salepersonAvgOrderByAggregateInput = {
    spid?: SortOrder
  }

  export type tbl_salepersonMaxOrderByAggregateInput = {
    spid?: SortOrder
    spfullname?: SortOrder
    spmobile?: SortOrder
    spcreated?: SortOrder
    spstatus?: SortOrder
  }

  export type tbl_salepersonMinOrderByAggregateInput = {
    spid?: SortOrder
    spfullname?: SortOrder
    spmobile?: SortOrder
    spcreated?: SortOrder
    spstatus?: SortOrder
  }

  export type tbl_salepersonSumOrderByAggregateInput = {
    spid?: SortOrder
  }

  export type tbl_settingsCountOrderByAggregateInput = {
    setid?: SortOrder
    settitle?: SortOrder
    setvalue?: SortOrder
  }

  export type tbl_settingsAvgOrderByAggregateInput = {
    setid?: SortOrder
  }

  export type tbl_settingsMaxOrderByAggregateInput = {
    setid?: SortOrder
    settitle?: SortOrder
    setvalue?: SortOrder
  }

  export type tbl_settingsMinOrderByAggregateInput = {
    setid?: SortOrder
    settitle?: SortOrder
    setvalue?: SortOrder
  }

  export type tbl_settingsSumOrderByAggregateInput = {
    setid?: SortOrder
  }

  export type tbl_surveyCountOrderByAggregateInput = {
    svid?: SortOrder
    svq?: SortOrder
    sva1?: SortOrder
    sva2?: SortOrder
    sva3?: SortOrder
  }

  export type tbl_surveyAvgOrderByAggregateInput = {
    svid?: SortOrder
  }

  export type tbl_surveyMaxOrderByAggregateInput = {
    svid?: SortOrder
    svq?: SortOrder
    sva1?: SortOrder
    sva2?: SortOrder
    sva3?: SortOrder
  }

  export type tbl_surveyMinOrderByAggregateInput = {
    svid?: SortOrder
    svq?: SortOrder
    sva1?: SortOrder
    sva2?: SortOrder
    sva3?: SortOrder
  }

  export type tbl_surveySumOrderByAggregateInput = {
    svid?: SortOrder
  }

  export type tbl_sysuserCountOrderByAggregateInput = {
    sysuid?: SortOrder
    sysufulln?: SortOrder
    sysumobile?: SortOrder
    sysuemail?: SortOrder
    sysuauth?: SortOrder
    sysutype?: SortOrder
    sysucreated?: SortOrder
  }

  export type tbl_sysuserAvgOrderByAggregateInput = {
    sysuid?: SortOrder
  }

  export type tbl_sysuserMaxOrderByAggregateInput = {
    sysuid?: SortOrder
    sysufulln?: SortOrder
    sysumobile?: SortOrder
    sysuemail?: SortOrder
    sysuauth?: SortOrder
    sysutype?: SortOrder
    sysucreated?: SortOrder
  }

  export type tbl_sysuserMinOrderByAggregateInput = {
    sysuid?: SortOrder
    sysufulln?: SortOrder
    sysumobile?: SortOrder
    sysuemail?: SortOrder
    sysuauth?: SortOrder
    sysutype?: SortOrder
    sysucreated?: SortOrder
  }

  export type tbl_sysuserSumOrderByAggregateInput = {
    sysuid?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter<$PrismaModel> | Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter<$PrismaModel> | Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}