// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Record from "App/Models/Record";

export default class RecordsController {
  public async index({ response }) {
    const records = await Record.all();

    return response.ok({
      status: true,
      message: 'all records grabbed',
      records,
    })
  }

  public async store({ request, response }) {
    const input = request.only(['ppm', 'temperature']);

    const record: Record = await Record.create({
      ppm: Math.round(input.ppm),
      temperature: input.temperature,
    });

    return response.ok({
      status: true,
      message: 'new record created',
      record,
    })
  }
}
