// OBS abilitar e adicionar o naminho tsconfig.json e  "typeRoots": ["./src/@types"],
declare namespace Express{
    export interface Request{
        user_id: string;
    }
}