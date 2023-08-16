import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as coreumAssetFtV1TxRegistry from "./asset/ft/v1/tx.registry";
import * as coreumAssetNftV1TxRegistry from "./asset/nft/v1/tx.registry";
import * as coreumNftV1beta1TxRegistry from "./nft/v1beta1/tx.registry";
import * as coreumAssetFtV1TxAmino from "./asset/ft/v1/tx.amino";
import * as coreumAssetNftV1TxAmino from "./asset/nft/v1/tx.amino";
import * as coreumNftV1beta1TxAmino from "./nft/v1beta1/tx.amino";
export const coreumAminoConverters = {
  ...coreumAssetFtV1TxAmino.AminoConverter,
  ...coreumAssetNftV1TxAmino.AminoConverter,
  ...coreumNftV1beta1TxAmino.AminoConverter
};
export const coreumProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...coreumAssetFtV1TxRegistry.registry, ...coreumAssetNftV1TxRegistry.registry, ...coreumNftV1beta1TxRegistry.registry];
export const getSigningCoreumClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...coreumProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...coreumAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCoreumClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCoreumClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};