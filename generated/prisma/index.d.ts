
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model personagem
 * 
 */
export type personagem = $Result.DefaultSelection<Prisma.$personagemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Personagems
 * const personagems = await prisma.personagem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Personagems
   * const personagems = await prisma.personagem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.personagem`: Exposes CRUD operations for the **personagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personagems
    * const personagems = await prisma.personagem.findMany()
    * ```
    */
  get personagem(): Prisma.personagemDelegate<ExtArgs, ClientOptions>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    personagem: 'personagem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "personagem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      personagem: {
        payload: Prisma.$personagemPayload<ExtArgs>
        fields: Prisma.personagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personagemPayload>
          }
          findFirst: {
            args: Prisma.personagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personagemPayload>
          }
          findMany: {
            args: Prisma.personagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personagemPayload>[]
          }
          create: {
            args: Prisma.personagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personagemPayload>
          }
          createMany: {
            args: Prisma.personagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.personagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personagemPayload>
          }
          update: {
            args: Prisma.personagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personagemPayload>
          }
          deleteMany: {
            args: Prisma.personagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.personagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personagemPayload>
          }
          aggregate: {
            args: Prisma.PersonagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonagem>
          }
          groupBy: {
            args: Prisma.personagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.personagemCountArgs<ExtArgs>
            result: $Utils.Optional<PersonagemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    personagem?: personagemOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Model personagem
   */

  export type AggregatePersonagem = {
    _count: PersonagemCountAggregateOutputType | null
    _avg: PersonagemAvgAggregateOutputType | null
    _sum: PersonagemSumAggregateOutputType | null
    _min: PersonagemMinAggregateOutputType | null
    _max: PersonagemMaxAggregateOutputType | null
  }

  export type PersonagemAvgAggregateOutputType = {
    id: number | null
    ataque: number | null
    defesa: number | null
    estamina: number | null
    velocidade: number | null
    critico: number | null
  }

  export type PersonagemSumAggregateOutputType = {
    id: number | null
    ataque: number | null
    defesa: number | null
    estamina: number | null
    velocidade: number | null
    critico: number | null
  }

  export type PersonagemMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    ataque: number | null
    defesa: number | null
    estamina: number | null
    velocidade: number | null
    critico: number | null
  }

  export type PersonagemMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    ataque: number | null
    defesa: number | null
    estamina: number | null
    velocidade: number | null
    critico: number | null
  }

  export type PersonagemCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    ataque: number
    defesa: number
    estamina: number
    velocidade: number
    critico: number
    _all: number
  }


  export type PersonagemAvgAggregateInputType = {
    id?: true
    ataque?: true
    defesa?: true
    estamina?: true
    velocidade?: true
    critico?: true
  }

  export type PersonagemSumAggregateInputType = {
    id?: true
    ataque?: true
    defesa?: true
    estamina?: true
    velocidade?: true
    critico?: true
  }

  export type PersonagemMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    ataque?: true
    defesa?: true
    estamina?: true
    velocidade?: true
    critico?: true
  }

  export type PersonagemMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    ataque?: true
    defesa?: true
    estamina?: true
    velocidade?: true
    critico?: true
  }

  export type PersonagemCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    ataque?: true
    defesa?: true
    estamina?: true
    velocidade?: true
    critico?: true
    _all?: true
  }

  export type PersonagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personagem to aggregate.
     */
    where?: personagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personagems to fetch.
     */
    orderBy?: personagemOrderByWithRelationInput | personagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned personagems
    **/
    _count?: true | PersonagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonagemMaxAggregateInputType
  }

  export type GetPersonagemAggregateType<T extends PersonagemAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonagem[P]>
      : GetScalarType<T[P], AggregatePersonagem[P]>
  }




  export type personagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personagemWhereInput
    orderBy?: personagemOrderByWithAggregationInput | personagemOrderByWithAggregationInput[]
    by: PersonagemScalarFieldEnum[] | PersonagemScalarFieldEnum
    having?: personagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonagemCountAggregateInputType | true
    _avg?: PersonagemAvgAggregateInputType
    _sum?: PersonagemSumAggregateInputType
    _min?: PersonagemMinAggregateInputType
    _max?: PersonagemMaxAggregateInputType
  }

  export type PersonagemGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    ataque: number
    defesa: number
    estamina: number
    velocidade: number
    critico: number
    _count: PersonagemCountAggregateOutputType | null
    _avg: PersonagemAvgAggregateOutputType | null
    _sum: PersonagemSumAggregateOutputType | null
    _min: PersonagemMinAggregateOutputType | null
    _max: PersonagemMaxAggregateOutputType | null
  }

  type GetPersonagemGroupByPayload<T extends personagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonagemGroupByOutputType[P]>
            : GetScalarType<T[P], PersonagemGroupByOutputType[P]>
        }
      >
    >


  export type personagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    ataque?: boolean
    defesa?: boolean
    estamina?: boolean
    velocidade?: boolean
    critico?: boolean
  }, ExtArgs["result"]["personagem"]>



  export type personagemSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    ataque?: boolean
    defesa?: boolean
    estamina?: boolean
    velocidade?: boolean
    critico?: boolean
  }

  export type personagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "ataque" | "defesa" | "estamina" | "velocidade" | "critico", ExtArgs["result"]["personagem"]>

  export type $personagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "personagem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      ataque: number
      defesa: number
      estamina: number
      velocidade: number
      critico: number
    }, ExtArgs["result"]["personagem"]>
    composites: {}
  }

  type personagemGetPayload<S extends boolean | null | undefined | personagemDefaultArgs> = $Result.GetResult<Prisma.$personagemPayload, S>

  type personagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonagemCountAggregateInputType | true
    }

  export interface personagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['personagem'], meta: { name: 'personagem' } }
    /**
     * Find zero or one Personagem that matches the filter.
     * @param {personagemFindUniqueArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personagemFindUniqueArgs>(args: SelectSubset<T, personagemFindUniqueArgs<ExtArgs>>): Prisma__personagemClient<$Result.GetResult<Prisma.$personagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personagemFindUniqueOrThrowArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personagemFindUniqueOrThrowArgs>(args: SelectSubset<T, personagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personagemClient<$Result.GetResult<Prisma.$personagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personagemFindFirstArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personagemFindFirstArgs>(args?: SelectSubset<T, personagemFindFirstArgs<ExtArgs>>): Prisma__personagemClient<$Result.GetResult<Prisma.$personagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personagemFindFirstOrThrowArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personagemFindFirstOrThrowArgs>(args?: SelectSubset<T, personagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__personagemClient<$Result.GetResult<Prisma.$personagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personagems
     * const personagems = await prisma.personagem.findMany()
     * 
     * // Get first 10 Personagems
     * const personagems = await prisma.personagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personagemWithIdOnly = await prisma.personagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends personagemFindManyArgs>(args?: SelectSubset<T, personagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personagem.
     * @param {personagemCreateArgs} args - Arguments to create a Personagem.
     * @example
     * // Create one Personagem
     * const Personagem = await prisma.personagem.create({
     *   data: {
     *     // ... data to create a Personagem
     *   }
     * })
     * 
     */
    create<T extends personagemCreateArgs>(args: SelectSubset<T, personagemCreateArgs<ExtArgs>>): Prisma__personagemClient<$Result.GetResult<Prisma.$personagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personagems.
     * @param {personagemCreateManyArgs} args - Arguments to create many Personagems.
     * @example
     * // Create many Personagems
     * const personagem = await prisma.personagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personagemCreateManyArgs>(args?: SelectSubset<T, personagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Personagem.
     * @param {personagemDeleteArgs} args - Arguments to delete one Personagem.
     * @example
     * // Delete one Personagem
     * const Personagem = await prisma.personagem.delete({
     *   where: {
     *     // ... filter to delete one Personagem
     *   }
     * })
     * 
     */
    delete<T extends personagemDeleteArgs>(args: SelectSubset<T, personagemDeleteArgs<ExtArgs>>): Prisma__personagemClient<$Result.GetResult<Prisma.$personagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personagem.
     * @param {personagemUpdateArgs} args - Arguments to update one Personagem.
     * @example
     * // Update one Personagem
     * const personagem = await prisma.personagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personagemUpdateArgs>(args: SelectSubset<T, personagemUpdateArgs<ExtArgs>>): Prisma__personagemClient<$Result.GetResult<Prisma.$personagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personagems.
     * @param {personagemDeleteManyArgs} args - Arguments to filter Personagems to delete.
     * @example
     * // Delete a few Personagems
     * const { count } = await prisma.personagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personagemDeleteManyArgs>(args?: SelectSubset<T, personagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personagems
     * const personagem = await prisma.personagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personagemUpdateManyArgs>(args: SelectSubset<T, personagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Personagem.
     * @param {personagemUpsertArgs} args - Arguments to update or create a Personagem.
     * @example
     * // Update or create a Personagem
     * const personagem = await prisma.personagem.upsert({
     *   create: {
     *     // ... data to create a Personagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personagem we want to update
     *   }
     * })
     */
    upsert<T extends personagemUpsertArgs>(args: SelectSubset<T, personagemUpsertArgs<ExtArgs>>): Prisma__personagemClient<$Result.GetResult<Prisma.$personagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personagemCountArgs} args - Arguments to filter Personagems to count.
     * @example
     * // Count the number of Personagems
     * const count = await prisma.personagem.count({
     *   where: {
     *     // ... the filter for the Personagems we want to count
     *   }
     * })
    **/
    count<T extends personagemCountArgs>(
      args?: Subset<T, personagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonagemAggregateArgs>(args: Subset<T, PersonagemAggregateArgs>): Prisma.PrismaPromise<GetPersonagemAggregateType<T>>

    /**
     * Group by Personagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personagemGroupByArgs} args - Group by arguments.
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
      T extends personagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personagemGroupByArgs['orderBy'] }
        : { orderBy?: personagemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, personagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the personagem model
   */
  readonly fields: personagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for personagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the personagem model
   */
  interface personagemFieldRefs {
    readonly id: FieldRef<"personagem", 'Int'>
    readonly nome: FieldRef<"personagem", 'String'>
    readonly descricao: FieldRef<"personagem", 'String'>
    readonly ataque: FieldRef<"personagem", 'Int'>
    readonly defesa: FieldRef<"personagem", 'Int'>
    readonly estamina: FieldRef<"personagem", 'Int'>
    readonly velocidade: FieldRef<"personagem", 'Int'>
    readonly critico: FieldRef<"personagem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * personagem findUnique
   */
  export type personagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personagem
     */
    select?: personagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personagem
     */
    omit?: personagemOmit<ExtArgs> | null
    /**
     * Filter, which personagem to fetch.
     */
    where: personagemWhereUniqueInput
  }

  /**
   * personagem findUniqueOrThrow
   */
  export type personagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personagem
     */
    select?: personagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personagem
     */
    omit?: personagemOmit<ExtArgs> | null
    /**
     * Filter, which personagem to fetch.
     */
    where: personagemWhereUniqueInput
  }

  /**
   * personagem findFirst
   */
  export type personagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personagem
     */
    select?: personagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personagem
     */
    omit?: personagemOmit<ExtArgs> | null
    /**
     * Filter, which personagem to fetch.
     */
    where?: personagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personagems to fetch.
     */
    orderBy?: personagemOrderByWithRelationInput | personagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personagems.
     */
    cursor?: personagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personagems.
     */
    distinct?: PersonagemScalarFieldEnum | PersonagemScalarFieldEnum[]
  }

  /**
   * personagem findFirstOrThrow
   */
  export type personagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personagem
     */
    select?: personagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personagem
     */
    omit?: personagemOmit<ExtArgs> | null
    /**
     * Filter, which personagem to fetch.
     */
    where?: personagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personagems to fetch.
     */
    orderBy?: personagemOrderByWithRelationInput | personagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personagems.
     */
    cursor?: personagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personagems.
     */
    distinct?: PersonagemScalarFieldEnum | PersonagemScalarFieldEnum[]
  }

  /**
   * personagem findMany
   */
  export type personagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personagem
     */
    select?: personagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personagem
     */
    omit?: personagemOmit<ExtArgs> | null
    /**
     * Filter, which personagems to fetch.
     */
    where?: personagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personagems to fetch.
     */
    orderBy?: personagemOrderByWithRelationInput | personagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing personagems.
     */
    cursor?: personagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personagems.
     */
    skip?: number
    distinct?: PersonagemScalarFieldEnum | PersonagemScalarFieldEnum[]
  }

  /**
   * personagem create
   */
  export type personagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personagem
     */
    select?: personagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personagem
     */
    omit?: personagemOmit<ExtArgs> | null
    /**
     * The data needed to create a personagem.
     */
    data: XOR<personagemCreateInput, personagemUncheckedCreateInput>
  }

  /**
   * personagem createMany
   */
  export type personagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many personagems.
     */
    data: personagemCreateManyInput | personagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * personagem update
   */
  export type personagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personagem
     */
    select?: personagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personagem
     */
    omit?: personagemOmit<ExtArgs> | null
    /**
     * The data needed to update a personagem.
     */
    data: XOR<personagemUpdateInput, personagemUncheckedUpdateInput>
    /**
     * Choose, which personagem to update.
     */
    where: personagemWhereUniqueInput
  }

  /**
   * personagem updateMany
   */
  export type personagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update personagems.
     */
    data: XOR<personagemUpdateManyMutationInput, personagemUncheckedUpdateManyInput>
    /**
     * Filter which personagems to update
     */
    where?: personagemWhereInput
    /**
     * Limit how many personagems to update.
     */
    limit?: number
  }

  /**
   * personagem upsert
   */
  export type personagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personagem
     */
    select?: personagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personagem
     */
    omit?: personagemOmit<ExtArgs> | null
    /**
     * The filter to search for the personagem to update in case it exists.
     */
    where: personagemWhereUniqueInput
    /**
     * In case the personagem found by the `where` argument doesn't exist, create a new personagem with this data.
     */
    create: XOR<personagemCreateInput, personagemUncheckedCreateInput>
    /**
     * In case the personagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personagemUpdateInput, personagemUncheckedUpdateInput>
  }

  /**
   * personagem delete
   */
  export type personagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personagem
     */
    select?: personagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personagem
     */
    omit?: personagemOmit<ExtArgs> | null
    /**
     * Filter which personagem to delete.
     */
    where: personagemWhereUniqueInput
  }

  /**
   * personagem deleteMany
   */
  export type personagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personagems to delete
     */
    where?: personagemWhereInput
    /**
     * Limit how many personagems to delete.
     */
    limit?: number
  }

  /**
   * personagem without action
   */
  export type personagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personagem
     */
    select?: personagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personagem
     */
    omit?: personagemOmit<ExtArgs> | null
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


  export const PersonagemScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    ataque: 'ataque',
    defesa: 'defesa',
    estamina: 'estamina',
    velocidade: 'velocidade',
    critico: 'critico'
  };

  export type PersonagemScalarFieldEnum = (typeof PersonagemScalarFieldEnum)[keyof typeof PersonagemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const personagemOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type personagemOrderByRelevanceFieldEnum = (typeof personagemOrderByRelevanceFieldEnum)[keyof typeof personagemOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type personagemWhereInput = {
    AND?: personagemWhereInput | personagemWhereInput[]
    OR?: personagemWhereInput[]
    NOT?: personagemWhereInput | personagemWhereInput[]
    id?: IntFilter<"personagem"> | number
    nome?: StringFilter<"personagem"> | string
    descricao?: StringFilter<"personagem"> | string
    ataque?: IntFilter<"personagem"> | number
    defesa?: IntFilter<"personagem"> | number
    estamina?: IntFilter<"personagem"> | number
    velocidade?: IntFilter<"personagem"> | number
    critico?: IntFilter<"personagem"> | number
  }

  export type personagemOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ataque?: SortOrder
    defesa?: SortOrder
    estamina?: SortOrder
    velocidade?: SortOrder
    critico?: SortOrder
    _relevance?: personagemOrderByRelevanceInput
  }

  export type personagemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: personagemWhereInput | personagemWhereInput[]
    OR?: personagemWhereInput[]
    NOT?: personagemWhereInput | personagemWhereInput[]
    nome?: StringFilter<"personagem"> | string
    descricao?: StringFilter<"personagem"> | string
    ataque?: IntFilter<"personagem"> | number
    defesa?: IntFilter<"personagem"> | number
    estamina?: IntFilter<"personagem"> | number
    velocidade?: IntFilter<"personagem"> | number
    critico?: IntFilter<"personagem"> | number
  }, "id">

  export type personagemOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ataque?: SortOrder
    defesa?: SortOrder
    estamina?: SortOrder
    velocidade?: SortOrder
    critico?: SortOrder
    _count?: personagemCountOrderByAggregateInput
    _avg?: personagemAvgOrderByAggregateInput
    _max?: personagemMaxOrderByAggregateInput
    _min?: personagemMinOrderByAggregateInput
    _sum?: personagemSumOrderByAggregateInput
  }

  export type personagemScalarWhereWithAggregatesInput = {
    AND?: personagemScalarWhereWithAggregatesInput | personagemScalarWhereWithAggregatesInput[]
    OR?: personagemScalarWhereWithAggregatesInput[]
    NOT?: personagemScalarWhereWithAggregatesInput | personagemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"personagem"> | number
    nome?: StringWithAggregatesFilter<"personagem"> | string
    descricao?: StringWithAggregatesFilter<"personagem"> | string
    ataque?: IntWithAggregatesFilter<"personagem"> | number
    defesa?: IntWithAggregatesFilter<"personagem"> | number
    estamina?: IntWithAggregatesFilter<"personagem"> | number
    velocidade?: IntWithAggregatesFilter<"personagem"> | number
    critico?: IntWithAggregatesFilter<"personagem"> | number
  }

  export type personagemCreateInput = {
    nome: string
    descricao: string
    ataque: number
    defesa: number
    estamina: number
    velocidade: number
    critico: number
  }

  export type personagemUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    ataque: number
    defesa: number
    estamina: number
    velocidade: number
    critico: number
  }

  export type personagemUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ataque?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
    estamina?: IntFieldUpdateOperationsInput | number
    velocidade?: IntFieldUpdateOperationsInput | number
    critico?: IntFieldUpdateOperationsInput | number
  }

  export type personagemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ataque?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
    estamina?: IntFieldUpdateOperationsInput | number
    velocidade?: IntFieldUpdateOperationsInput | number
    critico?: IntFieldUpdateOperationsInput | number
  }

  export type personagemCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    ataque: number
    defesa: number
    estamina: number
    velocidade: number
    critico: number
  }

  export type personagemUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ataque?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
    estamina?: IntFieldUpdateOperationsInput | number
    velocidade?: IntFieldUpdateOperationsInput | number
    critico?: IntFieldUpdateOperationsInput | number
  }

  export type personagemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ataque?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
    estamina?: IntFieldUpdateOperationsInput | number
    velocidade?: IntFieldUpdateOperationsInput | number
    critico?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type personagemOrderByRelevanceInput = {
    fields: personagemOrderByRelevanceFieldEnum | personagemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type personagemCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ataque?: SortOrder
    defesa?: SortOrder
    estamina?: SortOrder
    velocidade?: SortOrder
    critico?: SortOrder
  }

  export type personagemAvgOrderByAggregateInput = {
    id?: SortOrder
    ataque?: SortOrder
    defesa?: SortOrder
    estamina?: SortOrder
    velocidade?: SortOrder
    critico?: SortOrder
  }

  export type personagemMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ataque?: SortOrder
    defesa?: SortOrder
    estamina?: SortOrder
    velocidade?: SortOrder
    critico?: SortOrder
  }

  export type personagemMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ataque?: SortOrder
    defesa?: SortOrder
    estamina?: SortOrder
    velocidade?: SortOrder
    critico?: SortOrder
  }

  export type personagemSumOrderByAggregateInput = {
    id?: SortOrder
    ataque?: SortOrder
    defesa?: SortOrder
    estamina?: SortOrder
    velocidade?: SortOrder
    critico?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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