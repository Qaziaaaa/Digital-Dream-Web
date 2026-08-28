export type RevealFx = "b" | "l" | "g" | "s";

export const OUT_QUART = "cubic-bezier(.165,.84,.44,1)";
export const BOUNCE_PAST = "cubic-bezier(.175,.885,.32,1.275)";
export const REVEAL_DURATION = 1000;

export const INITIAL_TRANSFORM: Record<RevealFx, string> = {
  b: "translateY(100px)",
  l: "translateX(-100px)",
  g: "scale(0)",
  s: "scale(1.25)",
};

export const REVEAL: Record<string, { d: number; fx: RevealFx }> = {
  "d5504ce9-62f9-6152-69f6-19b3d1c7918c": { d: 0, fx: "b" },
  "d5504ce9-62f9-6152-69f6-19b3d1c7918f": { d: 0, fx: "b" },
  "d5504ce9-62f9-6152-69f6-19b3d1c7919a": { d: 0, fx: "b" },
  "f125550c-4eb5-5fa6-74d2-ee4a75889afb": { d: 500, fx: "g" },
  "9329c20e-2809-7b4b-2cc8-207944dc70bf": { d: 100, fx: "b" },
  "188cafa7-c96d-05f2-93a1-32690787c53a": { d: 200, fx: "b" },
  "f413ce83-000a-55c6-1b97-ca71ed641af9": { d: 200, fx: "b" },
  "2a0f10d4-c964-8d55-9344-1297faf8e170": { d: 200, fx: "b" },
  "1f6e3ad5-5543-5eab-d3eb-9c8df254e3e0": { d: 200, fx: "b" },
  "39da0660-16d6-84d3-34b2-edceed664141": { d: 200, fx: "b" },
  "aca55abb-644f-2c6b-9d99-e039275994f0": { d: 200, fx: "b" },
  "aca55abb-644f-2c6b-9d99-e039275994ed": { d: 200, fx: "b" },
  "d4a43a74-eda1-db2b-bb18-1a3120b5d8f5": { d: 200, fx: "b" },
  "d4a43a74-eda1-db2b-bb18-1a3120b5d8f7": { d: 200, fx: "b" },
  "7652ffc4-a06b-6afc-64e8-1f8c722d1375": { d: 200, fx: "b" },
  "f1b8522e-9d21-a712-e6aa-9d8b252ea55e": { d: 200, fx: "b" },
  "28f8c424-5a0c-1696-3f28-892e9e672694": { d: 100, fx: "b" },
  "386414eb-c014-ab10-626c-a898664d37b0": { d: 200, fx: "b" },
  "10d601c9-9854-a2af-5786-ea92e1d450d1": { d: 300, fx: "b" },
  "0a953c4f-fb48-5964-5a72-d91491f4c999": { d: 200, fx: "b" },
  "02fd1182-22d9-0b95-d413-680c47e91800": { d: 200, fx: "b" },
  "bab3f8d7-b0df-8831-6626-3322e43d6e0c": { d: 200, fx: "b" },
  "91836913-77ab-c48d-12b9-1a4f4efacd35": { d: 200, fx: "b" },
  "2f210b56-4dd7-067f-c786-a6cff9b97dad": { d: 200, fx: "b" },
  "abf002c0-a56c-0d8f-2c89-321507cb5015": { d: 200, fx: "s" },
  "3b1dac7c-d603-ed44-5bc3-410a0ce5b3ec": { d: 200, fx: "b" },
  "f89eaf18-b426-df3a-579f-5be37945ddc6": { d: 300, fx: "b" },
  "2e584957-d1fb-7f92-dee1-ee5777ab2f65": { d: 400, fx: "b" },
  "5cc9496a-63de-ee71-93d7-937c8ebb52b7": { d: 300, fx: "g" },
  "005a2ab4-8bf8-7792-5da0-5fdcb15167a4": { d: 300, fx: "b" },
};