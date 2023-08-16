import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Token, TokenAmino, TokenSDKType, TokenUpgradeStatuses, TokenUpgradeStatusesAmino, TokenUpgradeStatusesSDKType } from "./token";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** QueryParamsRequest defines the request type for querying x/asset/ft parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/asset/ft parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/coreum.asset.ft.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/asset/ft parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/asset/ft parameters. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/asset/ft parameters. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/coreum.asset.ft.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/asset/ft parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryTokenRequest {
  denom: string;
}
export interface QueryTokenRequestProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryTokenRequest";
  value: Uint8Array;
}
export interface QueryTokenRequestAmino {
  denom: string;
}
export interface QueryTokenRequestAminoMsg {
  type: "/coreum.asset.ft.v1.QueryTokenRequest";
  value: QueryTokenRequestAmino;
}
export interface QueryTokenRequestSDKType {
  denom: string;
}
export interface QueryTokenResponse {
  token: Token;
}
export interface QueryTokenResponseProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryTokenResponse";
  value: Uint8Array;
}
export interface QueryTokenResponseAmino {
  token?: TokenAmino;
}
export interface QueryTokenResponseAminoMsg {
  type: "/coreum.asset.ft.v1.QueryTokenResponse";
  value: QueryTokenResponseAmino;
}
export interface QueryTokenResponseSDKType {
  token: TokenSDKType;
}
export interface QueryTokenUpgradeStatusesRequest {
  denom: string;
}
export interface QueryTokenUpgradeStatusesRequestProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryTokenUpgradeStatusesRequest";
  value: Uint8Array;
}
export interface QueryTokenUpgradeStatusesRequestAmino {
  denom: string;
}
export interface QueryTokenUpgradeStatusesRequestAminoMsg {
  type: "/coreum.asset.ft.v1.QueryTokenUpgradeStatusesRequest";
  value: QueryTokenUpgradeStatusesRequestAmino;
}
export interface QueryTokenUpgradeStatusesRequestSDKType {
  denom: string;
}
export interface QueryTokenUpgradeStatusesResponse {
  statuses: TokenUpgradeStatuses;
}
export interface QueryTokenUpgradeStatusesResponseProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryTokenUpgradeStatusesResponse";
  value: Uint8Array;
}
export interface QueryTokenUpgradeStatusesResponseAmino {
  statuses?: TokenUpgradeStatusesAmino;
}
export interface QueryTokenUpgradeStatusesResponseAminoMsg {
  type: "/coreum.asset.ft.v1.QueryTokenUpgradeStatusesResponse";
  value: QueryTokenUpgradeStatusesResponseAmino;
}
export interface QueryTokenUpgradeStatusesResponseSDKType {
  statuses: TokenUpgradeStatusesSDKType;
}
export interface QueryTokensRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  issuer: string;
}
export interface QueryTokensRequestProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryTokensRequest";
  value: Uint8Array;
}
export interface QueryTokensRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  issuer: string;
}
export interface QueryTokensRequestAminoMsg {
  type: "/coreum.asset.ft.v1.QueryTokensRequest";
  value: QueryTokensRequestAmino;
}
export interface QueryTokensRequestSDKType {
  pagination: PageRequestSDKType;
  issuer: string;
}
export interface QueryTokensResponse {
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
  tokens: Token[];
}
export interface QueryTokensResponseProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryTokensResponse";
  value: Uint8Array;
}
export interface QueryTokensResponseAmino {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  tokens: TokenAmino[];
}
export interface QueryTokensResponseAminoMsg {
  type: "/coreum.asset.ft.v1.QueryTokensResponse";
  value: QueryTokensResponseAmino;
}
export interface QueryTokensResponseSDKType {
  pagination: PageResponseSDKType;
  tokens: TokenSDKType[];
}
export interface QueryBalanceRequest {
  /** account specifies the account onto which we query balances */
  account: string;
  /** denom specifies balances on a specific denom */
  denom: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryBalanceRequest";
  value: Uint8Array;
}
export interface QueryBalanceRequestAmino {
  /** account specifies the account onto which we query balances */
  account: string;
  /** denom specifies balances on a specific denom */
  denom: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "/coreum.asset.ft.v1.QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
export interface QueryBalanceRequestSDKType {
  account: string;
  denom: string;
}
export interface QueryBalanceResponse {
  /** balance contains the balance with the queried account and denom */
  balance: string;
  /** whitelisted is the whitelisted amount of the denom on the account. */
  whitelisted: string;
  /** frozen is the frozen amount of the denom on the account. */
  frozen: string;
  /** locked is the balance locked by vesting. */
  locked: string;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryBalanceResponse";
  value: Uint8Array;
}
export interface QueryBalanceResponseAmino {
  /** balance contains the balance with the queried account and denom */
  balance: string;
  /** whitelisted is the whitelisted amount of the denom on the account. */
  whitelisted: string;
  /** frozen is the frozen amount of the denom on the account. */
  frozen: string;
  /** locked is the balance locked by vesting. */
  locked: string;
}
export interface QueryBalanceResponseAminoMsg {
  type: "/coreum.asset.ft.v1.QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
export interface QueryBalanceResponseSDKType {
  balance: string;
  whitelisted: string;
  frozen: string;
  locked: string;
}
export interface QueryFrozenBalancesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  /** account specifies the account onto which we query frozen balances */
  account: string;
}
export interface QueryFrozenBalancesRequestProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryFrozenBalancesRequest";
  value: Uint8Array;
}
export interface QueryFrozenBalancesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  /** account specifies the account onto which we query frozen balances */
  account: string;
}
export interface QueryFrozenBalancesRequestAminoMsg {
  type: "/coreum.asset.ft.v1.QueryFrozenBalancesRequest";
  value: QueryFrozenBalancesRequestAmino;
}
export interface QueryFrozenBalancesRequestSDKType {
  pagination: PageRequestSDKType;
  account: string;
}
export interface QueryFrozenBalancesResponse {
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
  /** balances contains the frozen balances on the queried account */
  balances: Coin[];
}
export interface QueryFrozenBalancesResponseProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryFrozenBalancesResponse";
  value: Uint8Array;
}
export interface QueryFrozenBalancesResponseAmino {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  /** balances contains the frozen balances on the queried account */
  balances: CoinAmino[];
}
export interface QueryFrozenBalancesResponseAminoMsg {
  type: "/coreum.asset.ft.v1.QueryFrozenBalancesResponse";
  value: QueryFrozenBalancesResponseAmino;
}
export interface QueryFrozenBalancesResponseSDKType {
  pagination: PageResponseSDKType;
  balances: CoinSDKType[];
}
export interface QueryFrozenBalanceRequest {
  /** account specifies the account onto which we query frozen balances */
  account: string;
  /** denom specifies frozen balances on a specific denom */
  denom: string;
}
export interface QueryFrozenBalanceRequestProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryFrozenBalanceRequest";
  value: Uint8Array;
}
export interface QueryFrozenBalanceRequestAmino {
  /** account specifies the account onto which we query frozen balances */
  account: string;
  /** denom specifies frozen balances on a specific denom */
  denom: string;
}
export interface QueryFrozenBalanceRequestAminoMsg {
  type: "/coreum.asset.ft.v1.QueryFrozenBalanceRequest";
  value: QueryFrozenBalanceRequestAmino;
}
export interface QueryFrozenBalanceRequestSDKType {
  account: string;
  denom: string;
}
export interface QueryFrozenBalanceResponse {
  /** balance contains the frozen balance with the queried account and denom */
  balance: Coin;
}
export interface QueryFrozenBalanceResponseProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryFrozenBalanceResponse";
  value: Uint8Array;
}
export interface QueryFrozenBalanceResponseAmino {
  /** balance contains the frozen balance with the queried account and denom */
  balance?: CoinAmino;
}
export interface QueryFrozenBalanceResponseAminoMsg {
  type: "/coreum.asset.ft.v1.QueryFrozenBalanceResponse";
  value: QueryFrozenBalanceResponseAmino;
}
export interface QueryFrozenBalanceResponseSDKType {
  balance: CoinSDKType;
}
export interface QueryWhitelistedBalancesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  /** account specifies the account onto which we query whitelisted balances */
  account: string;
}
export interface QueryWhitelistedBalancesRequestProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryWhitelistedBalancesRequest";
  value: Uint8Array;
}
export interface QueryWhitelistedBalancesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  /** account specifies the account onto which we query whitelisted balances */
  account: string;
}
export interface QueryWhitelistedBalancesRequestAminoMsg {
  type: "/coreum.asset.ft.v1.QueryWhitelistedBalancesRequest";
  value: QueryWhitelistedBalancesRequestAmino;
}
export interface QueryWhitelistedBalancesRequestSDKType {
  pagination: PageRequestSDKType;
  account: string;
}
export interface QueryWhitelistedBalancesResponse {
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
  /** balances contains the whitelisted balances on the queried account */
  balances: Coin[];
}
export interface QueryWhitelistedBalancesResponseProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryWhitelistedBalancesResponse";
  value: Uint8Array;
}
export interface QueryWhitelistedBalancesResponseAmino {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  /** balances contains the whitelisted balances on the queried account */
  balances: CoinAmino[];
}
export interface QueryWhitelistedBalancesResponseAminoMsg {
  type: "/coreum.asset.ft.v1.QueryWhitelistedBalancesResponse";
  value: QueryWhitelistedBalancesResponseAmino;
}
export interface QueryWhitelistedBalancesResponseSDKType {
  pagination: PageResponseSDKType;
  balances: CoinSDKType[];
}
export interface QueryWhitelistedBalanceRequest {
  /** account specifies the account onto which we query whitelisted balances */
  account: string;
  /** denom specifies whitelisted balances on a specific denom */
  denom: string;
}
export interface QueryWhitelistedBalanceRequestProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryWhitelistedBalanceRequest";
  value: Uint8Array;
}
export interface QueryWhitelistedBalanceRequestAmino {
  /** account specifies the account onto which we query whitelisted balances */
  account: string;
  /** denom specifies whitelisted balances on a specific denom */
  denom: string;
}
export interface QueryWhitelistedBalanceRequestAminoMsg {
  type: "/coreum.asset.ft.v1.QueryWhitelistedBalanceRequest";
  value: QueryWhitelistedBalanceRequestAmino;
}
export interface QueryWhitelistedBalanceRequestSDKType {
  account: string;
  denom: string;
}
export interface QueryWhitelistedBalanceResponse {
  /** balance contains the whitelisted balance with the queried account and denom */
  balance: Coin;
}
export interface QueryWhitelistedBalanceResponseProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.QueryWhitelistedBalanceResponse";
  value: Uint8Array;
}
export interface QueryWhitelistedBalanceResponseAmino {
  /** balance contains the whitelisted balance with the queried account and denom */
  balance?: CoinAmino;
}
export interface QueryWhitelistedBalanceResponseAminoMsg {
  type: "/coreum.asset.ft.v1.QueryWhitelistedBalanceResponse";
  value: QueryWhitelistedBalanceResponseAmino;
}
export interface QueryWhitelistedBalanceResponseSDKType {
  balance: CoinSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenRequest(): QueryTokenRequest {
  return {
    denom: ""
  };
}
export const QueryTokenRequest = {
  encode(message: QueryTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenRequest>): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTokenRequestAmino): QueryTokenRequest {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryTokenRequest): QueryTokenRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTokenRequestAminoMsg): QueryTokenRequest {
    return QueryTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenRequestProtoMsg): QueryTokenRequest {
    return QueryTokenRequest.decode(message.value);
  },
  toProto(message: QueryTokenRequest): Uint8Array {
    return QueryTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenRequest): QueryTokenRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryTokenRequest",
      value: QueryTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenResponse(): QueryTokenResponse {
  return {
    token: Token.fromPartial({})
  };
}
export const QueryTokenResponse = {
  encode(message: QueryTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenResponse>): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    message.token = object.token !== undefined && object.token !== null ? Token.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenResponseAmino): QueryTokenResponse {
    return {
      token: object?.token ? Token.fromAmino(object.token) : undefined
    };
  },
  toAmino(message: QueryTokenResponse): QueryTokenResponseAmino {
    const obj: any = {};
    obj.token = message.token ? Token.toAmino(message.token) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenResponseAminoMsg): QueryTokenResponse {
    return QueryTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenResponseProtoMsg): QueryTokenResponse {
    return QueryTokenResponse.decode(message.value);
  },
  toProto(message: QueryTokenResponse): Uint8Array {
    return QueryTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenResponse): QueryTokenResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryTokenResponse",
      value: QueryTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenUpgradeStatusesRequest(): QueryTokenUpgradeStatusesRequest {
  return {
    denom: ""
  };
}
export const QueryTokenUpgradeStatusesRequest = {
  encode(message: QueryTokenUpgradeStatusesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenUpgradeStatusesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenUpgradeStatusesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenUpgradeStatusesRequest>): QueryTokenUpgradeStatusesRequest {
    const message = createBaseQueryTokenUpgradeStatusesRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTokenUpgradeStatusesRequestAmino): QueryTokenUpgradeStatusesRequest {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryTokenUpgradeStatusesRequest): QueryTokenUpgradeStatusesRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTokenUpgradeStatusesRequestAminoMsg): QueryTokenUpgradeStatusesRequest {
    return QueryTokenUpgradeStatusesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenUpgradeStatusesRequestProtoMsg): QueryTokenUpgradeStatusesRequest {
    return QueryTokenUpgradeStatusesRequest.decode(message.value);
  },
  toProto(message: QueryTokenUpgradeStatusesRequest): Uint8Array {
    return QueryTokenUpgradeStatusesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenUpgradeStatusesRequest): QueryTokenUpgradeStatusesRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryTokenUpgradeStatusesRequest",
      value: QueryTokenUpgradeStatusesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenUpgradeStatusesResponse(): QueryTokenUpgradeStatusesResponse {
  return {
    statuses: TokenUpgradeStatuses.fromPartial({})
  };
}
export const QueryTokenUpgradeStatusesResponse = {
  encode(message: QueryTokenUpgradeStatusesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statuses !== undefined) {
      TokenUpgradeStatuses.encode(message.statuses, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenUpgradeStatusesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenUpgradeStatusesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statuses = TokenUpgradeStatuses.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenUpgradeStatusesResponse>): QueryTokenUpgradeStatusesResponse {
    const message = createBaseQueryTokenUpgradeStatusesResponse();
    message.statuses = object.statuses !== undefined && object.statuses !== null ? TokenUpgradeStatuses.fromPartial(object.statuses) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenUpgradeStatusesResponseAmino): QueryTokenUpgradeStatusesResponse {
    return {
      statuses: object?.statuses ? TokenUpgradeStatuses.fromAmino(object.statuses) : undefined
    };
  },
  toAmino(message: QueryTokenUpgradeStatusesResponse): QueryTokenUpgradeStatusesResponseAmino {
    const obj: any = {};
    obj.statuses = message.statuses ? TokenUpgradeStatuses.toAmino(message.statuses) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenUpgradeStatusesResponseAminoMsg): QueryTokenUpgradeStatusesResponse {
    return QueryTokenUpgradeStatusesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenUpgradeStatusesResponseProtoMsg): QueryTokenUpgradeStatusesResponse {
    return QueryTokenUpgradeStatusesResponse.decode(message.value);
  },
  toProto(message: QueryTokenUpgradeStatusesResponse): Uint8Array {
    return QueryTokenUpgradeStatusesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenUpgradeStatusesResponse): QueryTokenUpgradeStatusesResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryTokenUpgradeStatusesResponse",
      value: QueryTokenUpgradeStatusesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokensRequest(): QueryTokensRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    issuer: ""
  };
}
export const QueryTokensRequest = {
  encode(message: QueryTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.issuer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokensRequest>): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.issuer = object.issuer ?? "";
    return message;
  },
  fromAmino(object: QueryTokensRequestAmino): QueryTokensRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      issuer: object.issuer
    };
  },
  toAmino(message: QueryTokensRequest): QueryTokensRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.issuer = message.issuer;
    return obj;
  },
  fromAminoMsg(object: QueryTokensRequestAminoMsg): QueryTokensRequest {
    return QueryTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokensRequestProtoMsg): QueryTokensRequest {
    return QueryTokensRequest.decode(message.value);
  },
  toProto(message: QueryTokensRequest): Uint8Array {
    return QueryTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokensRequest): QueryTokensRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryTokensRequest",
      value: QueryTokensRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokensResponse(): QueryTokensResponse {
  return {
    pagination: PageResponse.fromPartial({}),
    tokens: []
  };
}
export const QueryTokensResponse = {
  encode(message: QueryTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokens.push(Token.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokensResponse>): QueryTokensResponse {
    const message = createBaseQueryTokensResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.tokens = object.tokens?.map(e => Token.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokensResponseAmino): QueryTokensResponse {
    return {
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Token.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTokensResponse): QueryTokensResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.tokens = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokensResponseAminoMsg): QueryTokensResponse {
    return QueryTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokensResponseProtoMsg): QueryTokensResponse {
    return QueryTokensResponse.decode(message.value);
  },
  toProto(message: QueryTokensResponse): Uint8Array {
    return QueryTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokensResponse): QueryTokensResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryTokensResponse",
      value: QueryTokensResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    account: "",
    denom: ""
  };
}
export const QueryBalanceRequest = {
  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    return {
      account: object.account,
      denom: object.denom
    };
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: "",
    whitelisted: "",
    frozen: "",
    locked: ""
  };
}
export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    if (message.whitelisted !== "") {
      writer.uint32(18).string(message.whitelisted);
    }
    if (message.frozen !== "") {
      writer.uint32(26).string(message.frozen);
    }
    if (message.locked !== "") {
      writer.uint32(34).string(message.locked);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        case 2:
          message.whitelisted = reader.string();
          break;
        case 3:
          message.frozen = reader.string();
          break;
        case 4:
          message.locked = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance ?? "";
    message.whitelisted = object.whitelisted ?? "";
    message.frozen = object.frozen ?? "";
    message.locked = object.locked ?? "";
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    return {
      balance: object.balance,
      whitelisted: object.whitelisted,
      frozen: object.frozen,
      locked: object.locked
    };
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance;
    obj.whitelisted = message.whitelisted;
    obj.frozen = message.frozen;
    obj.locked = message.locked;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFrozenBalancesRequest(): QueryFrozenBalancesRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    account: ""
  };
}
export const QueryFrozenBalancesRequest = {
  encode(message: QueryFrozenBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFrozenBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFrozenBalancesRequest>): QueryFrozenBalancesRequest {
    const message = createBaseQueryFrozenBalancesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: QueryFrozenBalancesRequestAmino): QueryFrozenBalancesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      account: object.account
    };
  },
  toAmino(message: QueryFrozenBalancesRequest): QueryFrozenBalancesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryFrozenBalancesRequestAminoMsg): QueryFrozenBalancesRequest {
    return QueryFrozenBalancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFrozenBalancesRequestProtoMsg): QueryFrozenBalancesRequest {
    return QueryFrozenBalancesRequest.decode(message.value);
  },
  toProto(message: QueryFrozenBalancesRequest): Uint8Array {
    return QueryFrozenBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFrozenBalancesRequest): QueryFrozenBalancesRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryFrozenBalancesRequest",
      value: QueryFrozenBalancesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFrozenBalancesResponse(): QueryFrozenBalancesResponse {
  return {
    pagination: PageResponse.fromPartial({}),
    balances: []
  };
}
export const QueryFrozenBalancesResponse = {
  encode(message: QueryFrozenBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFrozenBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFrozenBalancesResponse>): QueryFrozenBalancesResponse {
    const message = createBaseQueryFrozenBalancesResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryFrozenBalancesResponseAmino): QueryFrozenBalancesResponse {
    return {
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryFrozenBalancesResponse): QueryFrozenBalancesResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balances = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryFrozenBalancesResponseAminoMsg): QueryFrozenBalancesResponse {
    return QueryFrozenBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFrozenBalancesResponseProtoMsg): QueryFrozenBalancesResponse {
    return QueryFrozenBalancesResponse.decode(message.value);
  },
  toProto(message: QueryFrozenBalancesResponse): Uint8Array {
    return QueryFrozenBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFrozenBalancesResponse): QueryFrozenBalancesResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryFrozenBalancesResponse",
      value: QueryFrozenBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFrozenBalanceRequest(): QueryFrozenBalanceRequest {
  return {
    account: "",
    denom: ""
  };
}
export const QueryFrozenBalanceRequest = {
  encode(message: QueryFrozenBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFrozenBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFrozenBalanceRequest>): QueryFrozenBalanceRequest {
    const message = createBaseQueryFrozenBalanceRequest();
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryFrozenBalanceRequestAmino): QueryFrozenBalanceRequest {
    return {
      account: object.account,
      denom: object.denom
    };
  },
  toAmino(message: QueryFrozenBalanceRequest): QueryFrozenBalanceRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryFrozenBalanceRequestAminoMsg): QueryFrozenBalanceRequest {
    return QueryFrozenBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFrozenBalanceRequestProtoMsg): QueryFrozenBalanceRequest {
    return QueryFrozenBalanceRequest.decode(message.value);
  },
  toProto(message: QueryFrozenBalanceRequest): Uint8Array {
    return QueryFrozenBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFrozenBalanceRequest): QueryFrozenBalanceRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryFrozenBalanceRequest",
      value: QueryFrozenBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFrozenBalanceResponse(): QueryFrozenBalanceResponse {
  return {
    balance: Coin.fromPartial({})
  };
}
export const QueryFrozenBalanceResponse = {
  encode(message: QueryFrozenBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFrozenBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFrozenBalanceResponse>): QueryFrozenBalanceResponse {
    const message = createBaseQueryFrozenBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  },
  fromAmino(object: QueryFrozenBalanceResponseAmino): QueryFrozenBalanceResponse {
    return {
      balance: object?.balance ? Coin.fromAmino(object.balance) : undefined
    };
  },
  toAmino(message: QueryFrozenBalanceResponse): QueryFrozenBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFrozenBalanceResponseAminoMsg): QueryFrozenBalanceResponse {
    return QueryFrozenBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFrozenBalanceResponseProtoMsg): QueryFrozenBalanceResponse {
    return QueryFrozenBalanceResponse.decode(message.value);
  },
  toProto(message: QueryFrozenBalanceResponse): Uint8Array {
    return QueryFrozenBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFrozenBalanceResponse): QueryFrozenBalanceResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryFrozenBalanceResponse",
      value: QueryFrozenBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWhitelistedBalancesRequest(): QueryWhitelistedBalancesRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    account: ""
  };
}
export const QueryWhitelistedBalancesRequest = {
  encode(message: QueryWhitelistedBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryWhitelistedBalancesRequest>): QueryWhitelistedBalancesRequest {
    const message = createBaseQueryWhitelistedBalancesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: QueryWhitelistedBalancesRequestAmino): QueryWhitelistedBalancesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      account: object.account
    };
  },
  toAmino(message: QueryWhitelistedBalancesRequest): QueryWhitelistedBalancesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistedBalancesRequestAminoMsg): QueryWhitelistedBalancesRequest {
    return QueryWhitelistedBalancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistedBalancesRequestProtoMsg): QueryWhitelistedBalancesRequest {
    return QueryWhitelistedBalancesRequest.decode(message.value);
  },
  toProto(message: QueryWhitelistedBalancesRequest): Uint8Array {
    return QueryWhitelistedBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistedBalancesRequest): QueryWhitelistedBalancesRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryWhitelistedBalancesRequest",
      value: QueryWhitelistedBalancesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWhitelistedBalancesResponse(): QueryWhitelistedBalancesResponse {
  return {
    pagination: PageResponse.fromPartial({}),
    balances: []
  };
}
export const QueryWhitelistedBalancesResponse = {
  encode(message: QueryWhitelistedBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryWhitelistedBalancesResponse>): QueryWhitelistedBalancesResponse {
    const message = createBaseQueryWhitelistedBalancesResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryWhitelistedBalancesResponseAmino): QueryWhitelistedBalancesResponse {
    return {
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryWhitelistedBalancesResponse): QueryWhitelistedBalancesResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balances = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistedBalancesResponseAminoMsg): QueryWhitelistedBalancesResponse {
    return QueryWhitelistedBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistedBalancesResponseProtoMsg): QueryWhitelistedBalancesResponse {
    return QueryWhitelistedBalancesResponse.decode(message.value);
  },
  toProto(message: QueryWhitelistedBalancesResponse): Uint8Array {
    return QueryWhitelistedBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistedBalancesResponse): QueryWhitelistedBalancesResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryWhitelistedBalancesResponse",
      value: QueryWhitelistedBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWhitelistedBalanceRequest(): QueryWhitelistedBalanceRequest {
  return {
    account: "",
    denom: ""
  };
}
export const QueryWhitelistedBalanceRequest = {
  encode(message: QueryWhitelistedBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryWhitelistedBalanceRequest>): QueryWhitelistedBalanceRequest {
    const message = createBaseQueryWhitelistedBalanceRequest();
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryWhitelistedBalanceRequestAmino): QueryWhitelistedBalanceRequest {
    return {
      account: object.account,
      denom: object.denom
    };
  },
  toAmino(message: QueryWhitelistedBalanceRequest): QueryWhitelistedBalanceRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistedBalanceRequestAminoMsg): QueryWhitelistedBalanceRequest {
    return QueryWhitelistedBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistedBalanceRequestProtoMsg): QueryWhitelistedBalanceRequest {
    return QueryWhitelistedBalanceRequest.decode(message.value);
  },
  toProto(message: QueryWhitelistedBalanceRequest): Uint8Array {
    return QueryWhitelistedBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistedBalanceRequest): QueryWhitelistedBalanceRequestProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryWhitelistedBalanceRequest",
      value: QueryWhitelistedBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWhitelistedBalanceResponse(): QueryWhitelistedBalanceResponse {
  return {
    balance: Coin.fromPartial({})
  };
}
export const QueryWhitelistedBalanceResponse = {
  encode(message: QueryWhitelistedBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryWhitelistedBalanceResponse>): QueryWhitelistedBalanceResponse {
    const message = createBaseQueryWhitelistedBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  },
  fromAmino(object: QueryWhitelistedBalanceResponseAmino): QueryWhitelistedBalanceResponse {
    return {
      balance: object?.balance ? Coin.fromAmino(object.balance) : undefined
    };
  },
  toAmino(message: QueryWhitelistedBalanceResponse): QueryWhitelistedBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistedBalanceResponseAminoMsg): QueryWhitelistedBalanceResponse {
    return QueryWhitelistedBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistedBalanceResponseProtoMsg): QueryWhitelistedBalanceResponse {
    return QueryWhitelistedBalanceResponse.decode(message.value);
  },
  toProto(message: QueryWhitelistedBalanceResponse): Uint8Array {
    return QueryWhitelistedBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistedBalanceResponse): QueryWhitelistedBalanceResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.QueryWhitelistedBalanceResponse",
      value: QueryWhitelistedBalanceResponse.encode(message).finish()
    };
  }
};