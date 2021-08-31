require "application_system_test_case"

class EpisodesTest < ApplicationSystemTestCase
  setup do
    @episode = episodes(:one)
  end

  test "visiting the index" do
    visit episodes_url
    assert_selector "h1", text: "Episodes"
  end

  test "creating a Episode" do
    visit episodes_url
    click_on "New Episode"

    fill_in "Audio preview url", with: @episode.audio_preview_url
    fill_in "Description", with: @episode.description
    fill_in "Duration ms", with: @episode.duration_ms
    fill_in "Id", with: @episode.id
    fill_in "Image url", with: @episode.image_url
    fill_in "Name", with: @episode.name
    fill_in "Release date", with: @episode.release_date
    fill_in "Uri", with: @episode.uri
    fill_in "Web url", with: @episode.web_url
    click_on "Create Episode"

    assert_text "Episode was successfully created"
    click_on "Back"
  end

  test "updating a Episode" do
    visit episodes_url
    click_on "Edit", match: :first

    fill_in "Audio preview url", with: @episode.audio_preview_url
    fill_in "Description", with: @episode.description
    fill_in "Duration ms", with: @episode.duration_ms
    fill_in "Id", with: @episode.id
    fill_in "Image url", with: @episode.image_url
    fill_in "Name", with: @episode.name
    fill_in "Release date", with: @episode.release_date
    fill_in "Uri", with: @episode.uri
    fill_in "Web url", with: @episode.web_url
    click_on "Update Episode"

    assert_text "Episode was successfully updated"
    click_on "Back"
  end

  test "destroying a Episode" do
    visit episodes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Episode was successfully destroyed"
  end
end
