/**
 * Fetches and returns only the airlines actively configured in Yazi Travels
 * (Commissions, Service Fees, and Core Partners)
 */
export async function getActiveYaziAirlines() {
  try {
    const [feesRes, commsRes, airlinesRes] = await Promise.all([
      fetch("https://api.yazitravels.com/api/yazi/v1/live/service-fees").then((r) => r.json()),
      fetch("https://api.yazitravels.com/api/yazi/v1/live/airline-commissions").then((r) => r.json()),
      fetch("https://api.yazitravels.com/api/yazi/v1/live/airlines/airlines").then((r) => r.json()),
    ]);

    const airlineMap = new Map();
    if (airlinesRes?.data) {
      airlinesRes.data.forEach((a) => airlineMap.set(String(a.id), a));
    }

    const unique = new Map();

    // 1. Airlines configured in Yazi Commissions
    if (commsRes?.data) {
      commsRes.data.forEach((c) => {
        if (c.airline_code) {
          unique.set(c.airline_code.toUpperCase(), {
            name: c.airline_name,
            iata: c.airline_code.toUpperCase(),
          });
        }
      });
    }

    // 2. Airlines configured in Yazi Service Fees
    if (feesRes?.data) {
      feesRes.data.forEach((f) => {
        const matched = airlineMap.get(String(f.airlineCode));
        if (matched?.iata) {
          unique.set(matched.iata.toUpperCase(), {
            name: matched.name.replace(/\s+Bahrain/i, ""),
            iata: matched.iata.toUpperCase(),
          });
        }
      });
    }

    // 3. Core Yazi B2B Partners (Gulf Air GF & Flydubai FZ)
    ["GF", "FZ"].forEach((code) => {
      const found = airlinesRes?.data?.find((a) => a.iata === code);
      if (found) {
        unique.set(code, {
          name: found.name.replace(/\s+Bahrain/i, ""),
          iata: code,
        });
      }
    });

    return Array.from(unique.values());
  } catch (error) {
    console.error("Error fetching Yazi in-use airlines:", error);
    return [];
  }
}
