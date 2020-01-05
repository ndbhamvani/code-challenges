plugins {
    id 'groovy'
    id 'java'
}

group 'org.example'
version '1.0-SNAPSHOT'

sourceCompatibility = 1.8

repositories {
    mavenCentral()
}

dependencies {
    compile 'org.codehaus.groovy:groovy-all:2.3.11'
    testCompile group: 'junit', name: 'junit', version: '4.12'
    // https://mvnrepository.com/artifact/org.spockframework/spock-core
    testCompile group: 'org.spockframework', name: 'spock-core', version: '1.1-groovy-2.3'
    // https://mvnrepository.com/artifact/org.codehaus.groovy.modules.http-builder/http-builder
    compile group: 'org.codehaus.groovy.modules.http-builder', name: 'http-builder', version: '0.7.1'
    // https://mvnrepository.com/artifact/org.apache.commons/commons-lang3
    compile group: 'org.apache.commons', name: 'commons-lang3', version: '3.9'
}