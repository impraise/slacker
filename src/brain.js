import redisServer from "redis";
import config from "./config";

const redis = redisServer.createClient(config.redis.dsn);
const keyPrefix = config.redis.prefix || "";
const failOnError = (err) => {
  if (err) {
    throw err;
  }
};

function keyify(keyValue) {
  return [keyPrefix, keyValue.join(".")].join(":");
}

function serialize(payload) {
  return JSON.stringify(payload);
}

function deserialize(payload) {
  return JSON.parse(payload);
}

export function memorize(name, payload, expiry = null) {
  const key = keyify(name);
  let multi = redis.multi().set(key, serialize(payload));

  if (expiry) {
    multi = multi.expire(key, expiry);
  }

  multi.exec(failOnError);
}

export function recall(name, cb) {
  const key = keyify(name);
  redis.get(key, (err, reply) => {
    failOnError(err);

    cb(reply && deserialize(reply) || null);
  });
}
