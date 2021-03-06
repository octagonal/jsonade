const { isNil } = require('lodash');
const { constructMeta, constructData } = require('./utils/data-construction.util');
const errors = require('./errors');

const defaultConfig = {
  attributes: [],
};

class Serializer {
  constructor(resource, config) {
    // guards
    if (!resource || isNil(resource)) {
      throw new errors.UndefinedResourceError();
    }

    this.resource = resource;
    this.config = Object.assign({}, defaultConfig, config);
  }

  serialize(data, dataSetConfig) {
    return {
      meta: constructMeta(data, this.resource, dataSetConfig),
      data: constructData(data, this.config),
    };
  }
}

module.exports = Serializer;
