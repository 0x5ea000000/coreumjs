//@ts-nocheck
import { MsgIssueClass, MsgMint, MsgBurn, MsgFreeze, MsgUnfreeze, MsgAddToWhitelist, MsgRemoveFromWhitelist } from "./tx";
export const AminoConverter = {
  "/coreum.asset.nft.v1.MsgIssueClass": {
    aminoType: "/coreum.asset.nft.v1.MsgIssueClass",
    toAmino: MsgIssueClass.toAmino,
    fromAmino: MsgIssueClass.fromAmino
  },
  "/coreum.asset.nft.v1.MsgMint": {
    aminoType: "/coreum.asset.nft.v1.MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/coreum.asset.nft.v1.MsgBurn": {
    aminoType: "/coreum.asset.nft.v1.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/coreum.asset.nft.v1.MsgFreeze": {
    aminoType: "/coreum.asset.nft.v1.MsgFreeze",
    toAmino: MsgFreeze.toAmino,
    fromAmino: MsgFreeze.fromAmino
  },
  "/coreum.asset.nft.v1.MsgUnfreeze": {
    aminoType: "/coreum.asset.nft.v1.MsgUnfreeze",
    toAmino: MsgUnfreeze.toAmino,
    fromAmino: MsgUnfreeze.fromAmino
  },
  "/coreum.asset.nft.v1.MsgAddToWhitelist": {
    aminoType: "/coreum.asset.nft.v1.MsgAddToWhitelist",
    toAmino: MsgAddToWhitelist.toAmino,
    fromAmino: MsgAddToWhitelist.fromAmino
  },
  "/coreum.asset.nft.v1.MsgRemoveFromWhitelist": {
    aminoType: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
    toAmino: MsgRemoveFromWhitelist.toAmino,
    fromAmino: MsgRemoveFromWhitelist.fromAmino
  }
};