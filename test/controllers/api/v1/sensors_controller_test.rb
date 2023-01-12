require "test_helper"

class Api::V1::SensorsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_v1_sensors_create_url
    assert_response :success
  end

  test "should get read" do
    get api_v1_sensors_read_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_sensors_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_v1_sensors_delete_url
    assert_response :success
  end
end
