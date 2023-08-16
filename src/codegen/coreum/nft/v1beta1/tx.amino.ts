//@ts-nocheck
import { MsgSend } from "./tx";
export const AminoConverter = {
  "/coreum.nft.v1beta1.MsgSend": {
    aminoType: "/coreum.nft.v1beta1.MsgSend",
    toAmino: MsgSend.toAmino,
    fromAmino: MsgSend.fromAmino
  }
};