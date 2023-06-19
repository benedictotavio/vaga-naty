export type UserData = {
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
  async function saveClient(payload: UserData) {
    if (payload) {
      console.log(process.env.API_URL);
      const res = await fetch(process.env.API_URL + "/Cliente", {
        method: "POST",
        cache: "default",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(payload),
      }).then((res) => res.json());

      return res;
    } else {
      throw new Error("Não foi possivel realizar a requisição!");
    }
  }
}
