import { StakingParams, StakingParamsAmino, StakingParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** staking_params defines staking parameters of the module. */
  stakingParams: StakingParams;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/coreum.customparams.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
  /** staking_params defines staking parameters of the module. */
  staking_params?: StakingParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/coreum.customparams.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  staking_params: StakingParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    stakingParams: StakingParams.fromPartial({})
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingParams !== undefined) {
      StakingParams.encode(message.stakingParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingParams = StakingParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.stakingParams = object.stakingParams !== undefined && object.stakingParams !== null ? StakingParams.fromPartial(object.stakingParams) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      stakingParams: object?.staking_params ? StakingParams.fromAmino(object.staking_params) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.staking_params = message.stakingParams ? StakingParams.toAmino(message.stakingParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/coreum.customparams.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};