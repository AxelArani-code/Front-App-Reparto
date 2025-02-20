
export const callFacet = async ({ facetName, arguments: args }: {
  facetName: string;

  arguments: any[];
}) => {
  const UNISAVE_GAME_TOKEN = import.meta.env.VITE_UNISAVE_GAME_TOKEN;
  const UNISAVE_BACKEND_HASH = import.meta.env.VITE_UNISAVE_BACKEND_HASH;
  const UNISAVE_BUILD_GUID = import.meta.env.VITE_UNISAVE_BUILD_GUID;

  const url = "https://unisave.cloud/_api/call-facet";

 // Funciones para manejar la sessionId en localStorage
 const loadSessionId = () => localStorage.getItem("unisave_sessionId") || "";
 const storeSessionId = (sessionId: string) => localStorage.setItem("unisave_sessionId", sessionId);

 // Obtener sessionId guardado (si existe)
 //const sessionId = loadSessionId();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        facetName,
        methodName:"Execute",
        arguments: args,
         sessionId: loadSessionId,
        deviceId: "nodeJsDeviceId",
        device: {
          platform: 'Custom',
          deviceModel: null,
          graphicsDeviceName: null,
          graphicsDeviceID: null,
          graphicsDeviceVendorID: null,
          graphicsMemorySize: null,
          graphicsDeviceType: null,
          systemMemorySize: null,
          processorCount: null,
          processorFrequency: null,
          processorType: null
        },
        gameToken: UNISAVE_GAME_TOKEN,
        editorKey: null,
        client: {
          backendHash: UNISAVE_BACKEND_HASH,
          buildGuid: UNISAVE_BUILD_GUID,
          frameworkVersion: "none",
          assetVersion: "1.0.0",
          versionString: "1.0.0"
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP Error ${response.status}: ${errorText}`);
    }

    const body = await response.json();
    const executionResult = body["executionResult"];

    const result = executionResult["result"];
    const exception = executionResult["exception"];
    const returned = executionResult["returned"];
    const special = executionResult["special"];

    console.log("Json", body)
  // Guardar la sessionId si viene en la respuesta
  if (special?.sessionId) {
    storeSessionId(special.sessionId);
    console.log("Session ID guardado:", special.sessionId);
  }
    if (result === "exception") {
      throw new Error(`[${exception["ClassName"]}] ${exception["Message"]}`);
    }

    return returned;

  } catch (error) {
    console.error("Error al llamar a Unisave:", error);
    throw error;
  }
};
