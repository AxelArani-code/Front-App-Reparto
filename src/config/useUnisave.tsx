import { useState } from 'react';



const UNISAVE_GAME_TOKEN = import.meta.env.VITE_UNISAVE_GAME_TOKEN;
const UNISAVE_BACKEND_HASH = import.meta.env.VITE_UNISAVE_BACKEND_HASH;
const UNISAVE_BUILD_GUID = import.meta.env.VITE_UNISAVE_BUILD_GUID;
const UNISAVE_METHOD = 'POST'
const UNISAVE_HEADERS = { 'Content-Type': 'application/json' }



export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const executeRequest = async (facetName: string, options: any = {}) => {
    setLoading(true);
    setError(null);

    try {
      const currentSessionId = localStorage.getItem('sessionId');

      const body = {
        facetName,
        methodName: options.methodName || 'Execute',
        arguments: options.parameters || [],
        sessionId: currentSessionId,
        deviceId: UNISAVE_BUILD_GUID,
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
          frameworkVersion: 'none',
          assetVersion: 'none',
          versionString: 'none'
        }
      };

      const response = await fetch('https://unisave.cloud/_api/call-facet', {
        method: UNISAVE_METHOD ,
        headers: UNISAVE_HEADERS,
        body: JSON.stringify(body)
      });

      const result = await response.json();
      const newSessionId = result?.executionResult?.special?.sessionId;

      if (newSessionId && !currentSessionId) {
        localStorage.setItem('sessionId', newSessionId);
      }
      return result;
    } catch (err) {
      console.error('API Request Error:', err);
      setError('API request failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { executeRequest, loading, error };
};
