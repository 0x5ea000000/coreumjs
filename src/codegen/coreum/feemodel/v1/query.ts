import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryMinGasPriceRequest is the request type for the Query/MinGasPrice RPC method. */
export interface QueryMinGasPriceRequest {}
export interface QueryMinGasPriceRequestProtoMsg {
  typeUrl: "/coreum.feemodel.v1.QueryMinGasPriceRequest";
  value: Uint8Array;
}
/** QueryMinGasPriceRequest is the request type for the Query/MinGasPrice RPC method. */
export interface QueryMinGasPriceRequestAmino {}
export interface QueryMinGasPriceRequestAminoMsg {
  type: "/coreum.feemodel.v1.QueryMinGasPriceRequest";
  value: QueryMinGasPriceRequestAmino;
}
/** QueryMinGasPriceRequest is the request type for the Query/MinGasPrice RPC method. */
export interface QueryMinGasPriceRequestSDKType {}
/** QueryMinGasPriceResponse is the response type for the Query/MinGasPrice RPC method. */
export interface QueryMinGasPriceResponse {
  /** min_gas_price is the current minimum gas price required by the network. */
  minGasPrice: DecCoin;
}
export interface QueryMinGasPriceResponseProtoMsg {
  typeUrl: "/coreum.feemodel.v1.QueryMinGasPriceResponse";
  value: Uint8Array;
}
/** QueryMinGasPriceResponse is the response type for the Query/MinGasPrice RPC method. */
export interface QueryMinGasPriceResponseAmino {
  /** min_gas_price is the current minimum gas price required by the network. */
  min_gas_price?: DecCoinAmino;
}
export interface QueryMinGasPriceResponseAminoMsg {
  type: "/coreum.feemodel.v1.QueryMinGasPriceResponse";
  value: QueryMinGasPriceResponseAmino;
}
/** QueryMinGasPriceResponse is the response type for the Query/MinGasPrice RPC method. */
export interface QueryMinGasPriceResponseSDKType {
  min_gas_price: DecCoinSDKType;
}
export interface QueryRecommendedGasPriceRequest {
  afterBlocks: number;
}
export interface QueryRecommendedGasPriceRequestProtoMsg {
  typeUrl: "/coreum.feemodel.v1.QueryRecommendedGasPriceRequest";
  value: Uint8Array;
}
export interface QueryRecommendedGasPriceRequestAmino {
  after_blocks: number;
}
export interface QueryRecommendedGasPriceRequestAminoMsg {
  type: "/coreum.feemodel.v1.QueryRecommendedGasPriceRequest";
  value: QueryRecommendedGasPriceRequestAmino;
}
export interface QueryRecommendedGasPriceRequestSDKType {
  after_blocks: number;
}
export interface QueryRecommendedGasPriceResponse {
  low: DecCoin;
  med: DecCoin;
  high: DecCoin;
}
export interface QueryRecommendedGasPriceResponseProtoMsg {
  typeUrl: "/coreum.feemodel.v1.QueryRecommendedGasPriceResponse";
  value: Uint8Array;
}
export interface QueryRecommendedGasPriceResponseAmino {
  low?: DecCoinAmino;
  med?: DecCoinAmino;
  high?: DecCoinAmino;
}
export interface QueryRecommendedGasPriceResponseAminoMsg {
  type: "/coreum.feemodel.v1.QueryRecommendedGasPriceResponse";
  value: QueryRecommendedGasPriceResponseAmino;
}
export interface QueryRecommendedGasPriceResponseSDKType {
  low: DecCoinSDKType;
  med: DecCoinSDKType;
  high: DecCoinSDKType;
}
/** QueryParamsRequest defines the request type for querying x/feemodel parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/coreum.feemodel.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/feemodel parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/coreum.feemodel.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/feemodel parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/feemodel parameters. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/coreum.feemodel.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/feemodel parameters. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/coreum.feemodel.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/feemodel parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryMinGasPriceRequest(): QueryMinGasPriceRequest {
  return {};
}
export const QueryMinGasPriceRequest = {
  encode(_: QueryMinGasPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinGasPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinGasPriceRequest();
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
  fromPartial(_: DeepPartial<QueryMinGasPriceRequest>): QueryMinGasPriceRequest {
    const message = createBaseQueryMinGasPriceRequest();
    return message;
  },
  fromAmino(_: QueryMinGasPriceRequestAmino): QueryMinGasPriceRequest {
    return {};
  },
  toAmino(_: QueryMinGasPriceRequest): QueryMinGasPriceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMinGasPriceRequestAminoMsg): QueryMinGasPriceRequest {
    return QueryMinGasPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinGasPriceRequestProtoMsg): QueryMinGasPriceRequest {
    return QueryMinGasPriceRequest.decode(message.value);
  },
  toProto(message: QueryMinGasPriceRequest): Uint8Array {
    return QueryMinGasPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMinGasPriceRequest): QueryMinGasPriceRequestProtoMsg {
    return {
      typeUrl: "/coreum.feemodel.v1.QueryMinGasPriceRequest",
      value: QueryMinGasPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMinGasPriceResponse(): QueryMinGasPriceResponse {
  return {
    minGasPrice: DecCoin.fromPartial({})
  };
}
export const QueryMinGasPriceResponse = {
  encode(message: QueryMinGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minGasPrice !== undefined) {
      DecCoin.encode(message.minGasPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinGasPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minGasPrice = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMinGasPriceResponse>): QueryMinGasPriceResponse {
    const message = createBaseQueryMinGasPriceResponse();
    message.minGasPrice = object.minGasPrice !== undefined && object.minGasPrice !== null ? DecCoin.fromPartial(object.minGasPrice) : undefined;
    return message;
  },
  fromAmino(object: QueryMinGasPriceResponseAmino): QueryMinGasPriceResponse {
    return {
      minGasPrice: object?.min_gas_price ? DecCoin.fromAmino(object.min_gas_price) : undefined
    };
  },
  toAmino(message: QueryMinGasPriceResponse): QueryMinGasPriceResponseAmino {
    const obj: any = {};
    obj.min_gas_price = message.minGasPrice ? DecCoin.toAmino(message.minGasPrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMinGasPriceResponseAminoMsg): QueryMinGasPriceResponse {
    return QueryMinGasPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinGasPriceResponseProtoMsg): QueryMinGasPriceResponse {
    return QueryMinGasPriceResponse.decode(message.value);
  },
  toProto(message: QueryMinGasPriceResponse): Uint8Array {
    return QueryMinGasPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMinGasPriceResponse): QueryMinGasPriceResponseProtoMsg {
    return {
      typeUrl: "/coreum.feemodel.v1.QueryMinGasPriceResponse",
      value: QueryMinGasPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRecommendedGasPriceRequest(): QueryRecommendedGasPriceRequest {
  return {
    afterBlocks: 0
  };
}
export const QueryRecommendedGasPriceRequest = {
  encode(message: QueryRecommendedGasPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.afterBlocks !== 0) {
      writer.uint32(8).uint32(message.afterBlocks);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecommendedGasPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecommendedGasPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.afterBlocks = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRecommendedGasPriceRequest>): QueryRecommendedGasPriceRequest {
    const message = createBaseQueryRecommendedGasPriceRequest();
    message.afterBlocks = object.afterBlocks ?? 0;
    return message;
  },
  fromAmino(object: QueryRecommendedGasPriceRequestAmino): QueryRecommendedGasPriceRequest {
    return {
      afterBlocks: object.after_blocks
    };
  },
  toAmino(message: QueryRecommendedGasPriceRequest): QueryRecommendedGasPriceRequestAmino {
    const obj: any = {};
    obj.after_blocks = message.afterBlocks;
    return obj;
  },
  fromAminoMsg(object: QueryRecommendedGasPriceRequestAminoMsg): QueryRecommendedGasPriceRequest {
    return QueryRecommendedGasPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecommendedGasPriceRequestProtoMsg): QueryRecommendedGasPriceRequest {
    return QueryRecommendedGasPriceRequest.decode(message.value);
  },
  toProto(message: QueryRecommendedGasPriceRequest): Uint8Array {
    return QueryRecommendedGasPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRecommendedGasPriceRequest): QueryRecommendedGasPriceRequestProtoMsg {
    return {
      typeUrl: "/coreum.feemodel.v1.QueryRecommendedGasPriceRequest",
      value: QueryRecommendedGasPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRecommendedGasPriceResponse(): QueryRecommendedGasPriceResponse {
  return {
    low: DecCoin.fromPartial({}),
    med: DecCoin.fromPartial({}),
    high: DecCoin.fromPartial({})
  };
}
export const QueryRecommendedGasPriceResponse = {
  encode(message: QueryRecommendedGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.low !== undefined) {
      DecCoin.encode(message.low, writer.uint32(10).fork()).ldelim();
    }
    if (message.med !== undefined) {
      DecCoin.encode(message.med, writer.uint32(18).fork()).ldelim();
    }
    if (message.high !== undefined) {
      DecCoin.encode(message.high, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecommendedGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecommendedGasPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.low = DecCoin.decode(reader, reader.uint32());
          break;
        case 2:
          message.med = DecCoin.decode(reader, reader.uint32());
          break;
        case 3:
          message.high = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRecommendedGasPriceResponse>): QueryRecommendedGasPriceResponse {
    const message = createBaseQueryRecommendedGasPriceResponse();
    message.low = object.low !== undefined && object.low !== null ? DecCoin.fromPartial(object.low) : undefined;
    message.med = object.med !== undefined && object.med !== null ? DecCoin.fromPartial(object.med) : undefined;
    message.high = object.high !== undefined && object.high !== null ? DecCoin.fromPartial(object.high) : undefined;
    return message;
  },
  fromAmino(object: QueryRecommendedGasPriceResponseAmino): QueryRecommendedGasPriceResponse {
    return {
      low: object?.low ? DecCoin.fromAmino(object.low) : undefined,
      med: object?.med ? DecCoin.fromAmino(object.med) : undefined,
      high: object?.high ? DecCoin.fromAmino(object.high) : undefined
    };
  },
  toAmino(message: QueryRecommendedGasPriceResponse): QueryRecommendedGasPriceResponseAmino {
    const obj: any = {};
    obj.low = message.low ? DecCoin.toAmino(message.low) : undefined;
    obj.med = message.med ? DecCoin.toAmino(message.med) : undefined;
    obj.high = message.high ? DecCoin.toAmino(message.high) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRecommendedGasPriceResponseAminoMsg): QueryRecommendedGasPriceResponse {
    return QueryRecommendedGasPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecommendedGasPriceResponseProtoMsg): QueryRecommendedGasPriceResponse {
    return QueryRecommendedGasPriceResponse.decode(message.value);
  },
  toProto(message: QueryRecommendedGasPriceResponse): Uint8Array {
    return QueryRecommendedGasPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRecommendedGasPriceResponse): QueryRecommendedGasPriceResponseProtoMsg {
    return {
      typeUrl: "/coreum.feemodel.v1.QueryRecommendedGasPriceResponse",
      value: QueryRecommendedGasPriceResponse.encode(message).finish()
    };
  }
};
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
      typeUrl: "/coreum.feemodel.v1.QueryParamsRequest",
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
      typeUrl: "/coreum.feemodel.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};