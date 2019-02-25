/**
 * @fileoverview lint eslint-plugin itself
 * @author kk
 */
"use strict";

const myself = Object.assign({}, require('../..'))

const pkgName = require('../../package.json').name

let pluginName

if (pkgName[0] === '@') {
    const matches = pkgName.match(/^(@[^/]+)\/eslint-plugin(?:-(.*))?$/)
    pluginName = matches.slice(1, 3).filter(Boolean).join('/')
} else {
    pluginName = pkgName.replace(/^eslint-plugin-/, '')
}

if (pluginName.configs) {
    myself.configs = Object.assign({}, plugin.configs)

    Object.keys(plugin.configs).forEach(configName => {
        myself.configs[configName] = Object.assign({}, config)
        if (config.extends) {
            const extends =[].concat(config.extends).map(extendsName => {
                return extendsName.replace(`plugin:${pluginName}/`, 'plugin:self/')
            })
            myself.configs[configName].extends = extends
        }
        if (config.rules) {
            myself.configs[configName].rules = Object.assign({}, config.rules);
            Object.keys(config.rules).forEach(ruleName => {
                if (ruleName.startsWith(`${pluginName}/`)) {
                    myself.configs[configName].rules[`self${ruleName.slice(ruleName.lastIndexOf('/'))}`] = config.rules[ruleName];
                    delete myself.configs[configName].rules[ruleName];
                }
            });
        }
    })
}


module.exports = myself
