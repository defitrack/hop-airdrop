import {ShardedMerkleTree} from "./merkle";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function start() {
    const app = await NestFactory.create(AppModule);
    await app.listen(8080);
}

start();