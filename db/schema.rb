# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_15_233054) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "aseguradoras", force: :cascade do |t|
    t.string "nombre"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "autos", force: :cascade do |t|
    t.string "Vin"
    t.string "Placas"
    t.string "Marca"
    t.string "Modelo"
    t.string "Anio"
    t.string "Color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "siniestro_id"
    t.index ["siniestro_id"], name: "index_autos_on_siniestro_id"
  end

  create_table "clientes", force: :cascade do |t|
    t.string "Nombre"
    t.text "Direccion"
    t.string "Telefono"
    t.string "Correo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "extras", force: :cascade do |t|
    t.bigint "auto_id"
    t.integer "kilometraje"
    t.string "bateria"
    t.integer "num_tapetes"
    t.string "tipo_tapete"
    t.integer "gasolina_litros"
    t.integer "gasolina_medida"
    t.text "comentarios"
    t.text "descr_gral"
    t.index ["auto_id"], name: "index_extras_on_auto_id"
  end

  create_table "fotos_autos", force: :cascade do |t|
    t.bigint "auto_id"
    t.integer "tipo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["auto_id"], name: "index_fotos_autos_on_auto_id"
  end

  create_table "inventario_autos", force: :cascade do |t|
    t.bigint "auto_id"
    t.bigint "inventario_id"
    t.index ["auto_id"], name: "index_inventario_autos_on_auto_id"
    t.index ["inventario_id"], name: "index_inventario_autos_on_inventario_id"
  end

  create_table "inventarios", force: :cascade do |t|
    t.string "nombre"
    t.integer "categoria"
    t.boolean "activo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "report_danos", force: :cascade do |t|
    t.string "direccion"
    t.string "transmision"
    t.integer "noPuertas"
    t.integer "noCilindro"
    t.string "tipoAsientos"
    t.string "tipoRin"
    t.string "medidaLlanta"
    t.string "eleCristal"
    t.string "tipoEspejo"
    t.string "tipoFaro"
    t.string "farosNie"
    t.integer "golpeMag"
    t.text "comentario"
    t.bigint "siniestros_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["siniestros_id"], name: "index_report_danos_on_siniestros_id"
  end

  create_table "siniestros", force: :cascade do |t|
    t.string "noOrden"
    t.string "noSiniestro"
    t.integer "poliza"
    t.integer "tipoEntrada"
    t.integer "status"
    t.date "fechaEntrada"
    t.date "fechaSalida"
    t.bigint "aseguradora_id"
    t.bigint "cliente_id"
    t.bigint "usuario_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["aseguradora_id"], name: "index_siniestros_on_aseguradora_id"
    t.index ["cliente_id"], name: "index_siniestros_on_cliente_id"
    t.index ["noOrden"], name: "index_siniestros_on_noOrden", unique: true
    t.index ["usuario_id"], name: "index_siniestros_on_usuario_id"
  end

  create_table "tokens", force: :cascade do |t|
    t.string "token"
    t.bigint "usuario_id"
    t.index ["usuario_id"], name: "index_tokens_on_usuario_id", unique: true
  end

  create_table "usuarios", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "nombreUsuario"
    t.string "nombre"
    t.string "celular"
    t.integer "tipo"
    t.index ["email"], name: "index_usuarios_on_email", unique: true
    t.index ["nombreUsuario"], name: "index_usuarios_on_nombreUsuario", unique: true
    t.index ["reset_password_token"], name: "index_usuarios_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_usuarios_on_unlock_token", unique: true
  end

  add_foreign_key "autos", "siniestros"
  add_foreign_key "extras", "autos"
  add_foreign_key "fotos_autos", "autos"
  add_foreign_key "inventario_autos", "autos"
  add_foreign_key "inventario_autos", "inventarios"
  add_foreign_key "report_danos", "siniestros", column: "siniestros_id"
  add_foreign_key "siniestros", "aseguradoras"
  add_foreign_key "siniestros", "clientes"
  add_foreign_key "siniestros", "usuarios"
  add_foreign_key "tokens", "usuarios"
end
