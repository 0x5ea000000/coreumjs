import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
export interface DataBytes {
  Data: Uint8Array;
}
export interface DataBytesProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.DataBytes";
  value: Uint8Array;
}
export interface DataBytesAmino {
  Data: Uint8Array;
}
export interface DataBytesAminoMsg {
  type: "/coreum.asset.nft.v1.DataBytes";
  value: DataBytesAmino;
}
export interface DataBytesSDKType {
  Data: Uint8Array;
}
function createBaseDataBytes(): DataBytes {
  return {
    Data: new Uint8Array()
  };
}
export const DataBytes = {
  encode(message: DataBytes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Data.length !== 0) {
      writer.uint32(10).bytes(message.Data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DataBytes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataBytes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DataBytes>): DataBytes {
    const message = createBaseDataBytes();
    message.Data = object.Data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DataBytesAmino): DataBytes {
    return {
      Data: object.Data
    };
  },
  toAmino(message: DataBytes): DataBytesAmino {
    const obj: any = {};
    obj.Data = message.Data;
    return obj;
  },
  fromAminoMsg(object: DataBytesAminoMsg): DataBytes {
    return DataBytes.fromAmino(object.value);
  },
  fromProtoMsg(message: DataBytesProtoMsg): DataBytes {
    return DataBytes.decode(message.value);
  },
  toProto(message: DataBytes): Uint8Array {
    return DataBytes.encode(message).finish();
  },
  toProtoMsg(message: DataBytes): DataBytesProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.DataBytes",
      value: DataBytes.encode(message).finish()
    };
  }
};