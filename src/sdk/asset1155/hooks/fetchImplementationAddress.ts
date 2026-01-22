import type { Hex } from "viem";
import { parseApiResponse } from "../lib/api";

type AddressResponse = { address: string };

const OFFCHAIN_INTERNAL_API_URL = import.meta.env.VITE_OFFCHAIN_INTERNAL_API_URL;

/**
 * 템플릿 SDK의 use1155ImplementationAddress가 호출하는 API와 동일:
 * GET {VITE_OFFCHAIN_INTERNAL_API_URL}/addresses/1155
 */
export async function fetch1155ImplementationAddress(): Promise<Hex> {
  if (!OFFCHAIN_INTERNAL_API_URL) {
    throw new Error("VITE_OFFCHAIN_INTERNAL_API_URL is not configured");
  }

  const response = await fetch(`${OFFCHAIN_INTERNAL_API_URL}/addresses/1155`);

  const data = await parseApiResponse<AddressResponse>(
    response,
    `Failed to load 1155 implementation address (${response.status})`
  );

  if (!data?.address) {
    throw new Error("1155 implementation address missing in response");
  }

  return data.address as Hex;
}

