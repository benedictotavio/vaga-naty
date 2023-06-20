export type Client = {
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export default function useClient() {
  async function saveClient(payload: Client) {
    if (payload) {
      console.log(payload);
      try {
        await fetch("https://api-deslocamento.herokuapp.com/api/v1/Cliente", {
          method: "POST",
          cache: "default",
          headers: { "Content-type": "application/json;charset=UTF-8" },
          body: JSON.stringify(payload),
        }).then((res) => res.json());
      } catch (error) {
        console.error(error);
      }
    } else {
      throw new Error("Não foi possivel realizar a requisição!");
    }
  }
  async function getClients() {
    try {
      const response = await fetch(
        "https://api-deslocamento.herokuapp.com/api/v1/Cliente"
      );
      const results = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  }
  return { saveClient, getClients };
}
