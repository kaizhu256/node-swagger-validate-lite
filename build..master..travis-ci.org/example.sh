# example.sh

# this shell script will auto-generate documentation for the mysql npm-package with zero-config

# 1. npm install swagger-validate-lite
cd /tmp && npm install swagger-validate-lite

# 2. swagger-validate file /tmp/swagger.json
shPrintAndEval() {
    printf "\n\n\n"
    printf "\$ $*\n\n"
    eval "$@"
    return 0
}
shPrintAndEval curl -o /tmp/swagger.json http://petstore.swagger.io/v2/swagger.json

shPrintAndEval /tmp/node_modules/.bin/swagger-validate-lite /tmp/swagger.json


# 3. swagger-validate file /tmp/swagger.json with error
shPrintAndEval sed -in 's|"integer"|"undefined"|' /tmp/swagger.json

shPrintAndEval /tmp/node_modules/.bin/swagger-validate-lite /tmp/swagger.json


# 4. swagger-validate url http://petstore.swagger.io/v2/swagger.json
shPrintAndEval /tmp/node_modules/.bin/swagger-validate-lite http://petstore.swagger.io/v2/swagger.json
