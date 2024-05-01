/** @format */

const { Logger } = require('../config');
class CrudRepository {
	constructor(model) {
		this.model = model;
	}
	async create(data) {
		console.log('inside repo');
		try {
			const response = await this.model.create(data);
			return response;
		} catch (error) {
			Logger.error('Something went wrong in CRUD Repo create function');
			throw error;
		}
	}
	async destroy(data) {
		try {
			const response = await this.model.destory({
				where: {
					id: data,
				},
			});
			return response;
		} catch (error) {
			Logger.error('Something went wrong in CRUD Repo: Destroy');
			throw error;
		}
	}
	async get(data) {
		try {
			const response = await this.model.get.findByPk(data);
			return response;
		} catch (error) {
			Logger.error('Something went wrong in CRUD Repo: get');
			throw error;
		}
	}
	async getAll() {
		try {
			const response = await this.model.get.findAll();
			return response;
		} catch (error) {
			Logger.error('Something went wrong in CRUD Repo: getAll');
			throw error;
		}
	}
	async update(id, data) {
		try {
			const response = await this.model.get.update(data, {
				where: {
					id: id,
				},
			});
			return response;
		} catch (error) {
			Logger.error('Something went wrong in CRUD Repo: update');
			throw error;
		}
	}
}
module.exports = CrudRepository;
