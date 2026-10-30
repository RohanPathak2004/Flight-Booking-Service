const { StatusCodes } = require("http-status-codes");
const message = require("../utils/Strings/message-strings");

class CrudRepository {
      constructor(model) {
            this.model = model;
      }

      async create(data) {
            const res = await this.model.create(data);
            return res;
      }

      async destory(data) {
            const res = await this.model.destory({
                  where: {
                        id: data,
                  }
            })
            return res;
      }

      async get(data) {
            const res = await this.model.findByPk(data);
            if (!res) throw new AppError(message.notFound('resource'), StatusCodes.NOT_FOUND);
            return res;
      }
      
      async getAll() {
            const res = await this.model.findAll();
            return res;
      }

      async update(id, data) {
            const res = await this.model.update(data, {
                  where: {
                        id: id,
                  }
            })
            if (!res) throw new AppError("Not found", StatusCodes.NOT_FOUND);
            return res;
      }
}

module.exports = CrudRepository;