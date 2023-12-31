import PocketBase from 'pocketbase';
import { env } from 'process';

export let pb = new PocketBase('http://127.0.0.1:8090');
pb.admins.authWithPassword(getAuthEmail(), getAuthPassword());

export function getAuthEmail():string{
    return env.DB_EMAIL ?? ""
}

export function getAuthPassword():string{
    return env.DB_PW ?? ""
}