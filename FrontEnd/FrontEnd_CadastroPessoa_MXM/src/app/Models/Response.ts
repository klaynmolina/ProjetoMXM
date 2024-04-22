export interface Response<T> {
    dados: T;
    mensagem: string;
    statusResposta: boolean;
}