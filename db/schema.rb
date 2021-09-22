# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_18_092810) do

  create_table "episodes", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "audio_preview_url"
    t.text "description"
    t.text "html_description"
    t.integer "duration_ms"
    t.string "web_url"
    t.string "id"
    t.string "image_url"
    t.string "name"
    t.string "release_date"
    t.string "uri"
    t.index ["description"], name: "description", type: :fulltext
    t.index ["description"], name: "description_2", type: :fulltext
    t.index ["name", "description"], name: "name", type: :fulltext
    t.index ["name", "description"], name: "name_3", type: :fulltext
    t.index ["name"], name: "name_2", type: :fulltext
    t.index ["name"], name: "name_4", type: :fulltext
  end

  create_table "episodes_tags", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "episode_id"
    t.bigint "tag_id"
    t.index ["episode_id"], name: "index_episodes_tags_on_episode_id"
    t.index ["tag_id"], name: "index_episodes_tags_on_tag_id"
  end

  create_table "tags", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
