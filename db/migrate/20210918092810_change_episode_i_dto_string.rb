class ChangeEpisodeIDtoString < ActiveRecord::Migration[6.0]
  def change
    change_column :episodes_tags, :episode_id, :string
  end
end
