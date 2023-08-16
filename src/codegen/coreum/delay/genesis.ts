import { Timestamp } from "../../google/protobuf/timestamp";
import { Any, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../helpers";
/** GenesisState defines the module genesis state. */
export interface GenesisState {
  /** tokens keep the fungible token state */
  delayedItems: DelayedItem[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/coreum.delay.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module genesis state. */
export interface GenesisStateAmino {
  /** tokens keep the fungible token state */
  delayed_items: DelayedItemAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/coreum.delay.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module genesis state. */
export interface GenesisStateSDKType {
  delayed_items: DelayedItemSDKType[];
}
export interface DelayedItem {
  id: string;
  executionTime: Date;
  data: Any;
}
export interface DelayedItemProtoMsg {
  typeUrl: "/coreum.delay.v1.DelayedItem";
  value: Uint8Array;
}
export interface DelayedItemAmino {
  id: string;
  execution_time?: Date;
  data?: AnyAmino;
}
export interface DelayedItemAminoMsg {
  type: "/coreum.delay.v1.DelayedItem";
  value: DelayedItemAmino;
}
export interface DelayedItemSDKType {
  id: string;
  execution_time: Date;
  data: AnySDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    delayedItems: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delayedItems) {
      DelayedItem.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.delayedItems.push(DelayedItem.decode(reader, reader.uint32()));
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
    message.delayedItems = object.delayedItems?.map(e => DelayedItem.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      delayedItems: Array.isArray(object?.delayed_items) ? object.delayed_items.map((e: any) => DelayedItem.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.delayedItems) {
      obj.delayed_items = message.delayedItems.map(e => e ? DelayedItem.toAmino(e) : undefined);
    } else {
      obj.delayed_items = [];
    }
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
      typeUrl: "/coreum.delay.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseDelayedItem(): DelayedItem {
  return {
    id: "",
    executionTime: new Date(),
    data: Any.fromPartial({})
  };
}
export const DelayedItem = {
  encode(message: DelayedItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.executionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.executionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelayedItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.executionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DelayedItem>): DelayedItem {
    const message = createBaseDelayedItem();
    message.id = object.id ?? "";
    message.executionTime = object.executionTime ?? undefined;
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino(object: DelayedItemAmino): DelayedItem {
    return {
      id: object.id,
      executionTime: object.execution_time,
      data: object?.data ? Any.fromAmino(object.data) : undefined
    };
  },
  toAmino(message: DelayedItem): DelayedItemAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.execution_time = message.executionTime;
    obj.data = message.data ? Any.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelayedItemAminoMsg): DelayedItem {
    return DelayedItem.fromAmino(object.value);
  },
  fromProtoMsg(message: DelayedItemProtoMsg): DelayedItem {
    return DelayedItem.decode(message.value);
  },
  toProto(message: DelayedItem): Uint8Array {
    return DelayedItem.encode(message).finish();
  },
  toProtoMsg(message: DelayedItem): DelayedItemProtoMsg {
    return {
      typeUrl: "/coreum.delay.v1.DelayedItem",
      value: DelayedItem.encode(message).finish()
    };
  }
};