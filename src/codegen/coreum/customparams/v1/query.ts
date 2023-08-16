import { StakingParams, StakingParamsAmino, StakingParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryStakingParamsRequest defines the request type for querying x/customparams staking parameters. */
export interface QueryStakingParamsRequest {}
export interface QueryStakingParamsRequestProtoMsg {
  typeUrl: "/coreum.customparams.v1.QueryStakingParamsRequest";
  value: Uint8Array;
}
/** QueryStakingParamsRequest defines the request type for querying x/customparams staking parameters. */
export interface QueryStakingParamsRequestAmino {}
export interface QueryStakingParamsRequestAminoMsg {
  type: "/coreum.customparams.v1.QueryStakingParamsRequest";
  value: QueryStakingParamsRequestAmino;
}
/** QueryStakingParamsRequest defines the request type for querying x/customparams staking parameters. */
export interface QueryStakingParamsRequestSDKType {}
/** QueryStakingParamsResponse defines the response type for querying x/customparams staking parameters. */
export interface QueryStakingParamsResponse {
  params: StakingParams;
}
export interface QueryStakingParamsResponseProtoMsg {
  typeUrl: "/coreum.customparams.v1.QueryStakingParamsResponse";
  value: Uint8Array;
}
/** QueryStakingParamsResponse defines the response type for querying x/customparams staking parameters. */
export interface QueryStakingParamsResponseAmino {
  params?: StakingParamsAmino;
}
export interface QueryStakingParamsResponseAminoMsg {
  type: "/coreum.customparams.v1.QueryStakingParamsResponse";
  value: QueryStakingParamsResponseAmino;
}
/** QueryStakingParamsResponse defines the response type for querying x/customparams staking parameters. */
export interface QueryStakingParamsResponseSDKType {
  params: StakingParamsSDKType;
}
function createBaseQueryStakingParamsRequest(): QueryStakingParamsRequest {
  return {};
}
export const QueryStakingParamsRequest = {
  encode(_: QueryStakingParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakingParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakingParamsRequest();
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
  fromPartial(_: DeepPartial<QueryStakingParamsRequest>): QueryStakingParamsRequest {
    const message = createBaseQueryStakingParamsRequest();
    return message;
  },
  fromAmino(_: QueryStakingParamsRequestAmino): QueryStakingParamsRequest {
    return {};
  },
  toAmino(_: QueryStakingParamsRequest): QueryStakingParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryStakingParamsRequestAminoMsg): QueryStakingParamsRequest {
    return QueryStakingParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakingParamsRequestProtoMsg): QueryStakingParamsRequest {
    return QueryStakingParamsRequest.decode(message.value);
  },
  toProto(message: QueryStakingParamsRequest): Uint8Array {
    return QueryStakingParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakingParamsRequest): QueryStakingParamsRequestProtoMsg {
    return {
      typeUrl: "/coreum.customparams.v1.QueryStakingParamsRequest",
      value: QueryStakingParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakingParamsResponse(): QueryStakingParamsResponse {
  return {
    params: StakingParams.fromPartial({})
  };
}
export const QueryStakingParamsResponse = {
  encode(message: QueryStakingParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      StakingParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakingParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakingParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = StakingParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryStakingParamsResponse>): QueryStakingParamsResponse {
    const message = createBaseQueryStakingParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? StakingParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryStakingParamsResponseAmino): QueryStakingParamsResponse {
    return {
      params: object?.params ? StakingParams.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryStakingParamsResponse): QueryStakingParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? StakingParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakingParamsResponseAminoMsg): QueryStakingParamsResponse {
    return QueryStakingParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakingParamsResponseProtoMsg): QueryStakingParamsResponse {
    return QueryStakingParamsResponse.decode(message.value);
  },
  toProto(message: QueryStakingParamsResponse): Uint8Array {
    return QueryStakingParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakingParamsResponse): QueryStakingParamsResponseProtoMsg {
    return {
      typeUrl: "/coreum.customparams.v1.QueryStakingParamsResponse",
      value: QueryStakingParamsResponse.encode(message).finish()
    };
  }
};