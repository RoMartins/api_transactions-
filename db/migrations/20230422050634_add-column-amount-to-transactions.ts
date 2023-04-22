import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.decimal('amount', 10, 2).notNullable()
    table.text('title')
    table.dropColumn('text')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.dropColumn('amount')
    table.dropColumn('title')
    table.text('text')
  })
}
