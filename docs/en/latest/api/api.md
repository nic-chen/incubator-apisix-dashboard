---
title: API doc of Manager API.
---

<!--
#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
-->

Manager API directly operates ETCD and provides data management for Apache APISIX, provides APIs for Front-end or other clients.

**License:** [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)
# APISIX Dashboard


### /apisix/admin/server_info

#### GET
##### Summary:

Get the list of server_info

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | string |
| page_size | query |  | No | string |
| hostname | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/server_info/{id}

#### GET
##### Summary:

Get the server info by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/routes

#### POST
##### Summary:

Create a route

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes | [route](#route) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### GET
##### Summary:

Get the list of route

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | string |
| page_size | query |  | No | string |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### PUT
##### Summary:

Update the route

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes | [route](#route) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/routes/{id}

#### DELETE
##### Summary:

Delete the route

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### GET
##### Summary:

Get the specified route

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | The id of route | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### PUT
##### Summary:

Update the specified route

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| data | body |  | Yes | [route](#route) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### PATCH
##### Summary:

Update the specified route

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| data | body |  | Yes | [route](#route) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/notexist/routes

#### GET
##### Summary:

Return result of route exists checking by name and exclude id.

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| name | query | name of route | No | string |
| exclude | query | id of route that exclude checking | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/routes/{id}/{path}

#### PATCH
##### Summary:

Update part of the route

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| path | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/debug-request-forwarding

#### POST
##### Summary:

Debug request forwarding for FE

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| online_debug_url | header |  | No | string |
| online_debug_request_protocol | header |  | No | string |
| online_debug_method | header |  | No | string |
| online_debug_header_params | header |  | No | string |
| Content-Type | header |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/schema/plugins/{name}

#### GET
##### Summary:

Get the plugin schema by name

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| schema_type | query |  | No | string |
| name | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/schemas/{resource}

#### GET
##### Summary:

Get the schema by resource

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| resource | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/plugins

#### GET
##### Summary:

Get the schema of plugin

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| all | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/services

#### POST
##### Summary:

Create service

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes | [service](#service) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### GET
##### Summary:

Return the service list according to the specified page number and page size, and can search services by name.

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query | page number | No | integer |
| page_size | query | page size | No | integer |
| name | query | name of service | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [  ] |

#### PUT
##### Summary:

Update the service

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes | [service](#service) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/services/{id}

#### DELETE
##### Summary:

Delete the services

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### GET
##### Summary:

Return the service that specify by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### PATCH
##### Summary:

Update part of the service that specify by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| data | body |  | Yes | [service](#service) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### PUT
##### Summary:

Update the service that specify by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| data | body |  | Yes | [service](#service) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/services/{id}/{path}

#### PATCH
##### Summary:

Update inner path of service that specify by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| path | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/check_ssl_exists

#### POST
##### Summary:

Check if the SSL configuration exists

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/check_ssl_cert

#### POST
##### Summary:

Check whether the SSL configuration is legal

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes | [ssl](#ssl) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/ssl

#### POST
##### Summary:

Create ssl config

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes | [ssl](#ssl) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### GET
##### Summary:

Return the SSL list according to the specified page number and page size, and can SSLs search by sni.

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query | page number | No | integer |
| page_size | query | page size | No | integer |
| sni | query | sni of SSL | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [ [universal_response_data](#universal_response_data) ] |

#### PUT
##### Summary:

Update the SSL configuration

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes | [ssl](#ssl) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/ssl/{id}

#### DELETE
##### Summary:

Delete SSL configuration based on ID

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### GET
##### Summary:

Get the ssl that specify by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### PATCH
##### Summary:

Update part of SSL configuration that specified by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### PUT
##### Summary:

Update the specified SSL configuration

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| data | body |  | Yes | [ssl](#ssl) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/ssl/{id}/{path}

#### PATCH
##### Summary:

Update part of SSL configuration that specified by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| path | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/tool/version_match

#### GET
##### Summary:

Check if dashboard and apisix match

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/tool/version

#### GET
##### Summary:

Get the dashboard's version and commit hash

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/notexist/upstreams

#### GET
##### Summary:

Check if the upstream is existed

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/upstreams

#### POST
##### Summary:

Create the upstream configuration

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes | [upstream](#upstream) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### GET
##### Summary:

Return the upstream list according to the specified page number and page size, and can search upstreams by name.

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query | page number | No | integer |
| page_size | query | page size | No | integer |
| name | query | name of upstream | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [  ] |

#### PUT
##### Summary:

Update the upstream configuration

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes | [upstream](#upstream) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/upstreams/{id}

#### DELETE
##### Summary:

Delete upstream configuration that specified by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### GET
##### Summary:

Get the upstream configuration specified by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### PATCH
##### Summary:

Update the part of  upstream configuration that specified by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| data | body |  | Yes | [upstream](#upstream) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### PUT
##### Summary:

Update the upstream configuration that specified by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| data | body |  | Yes | [upstream](#upstream) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/names/upstreams

#### GET
##### Summary:

List the upstream's name and id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/upstreams/{id}/{path}

#### PATCH
##### Summary:

Update the subpath of  upstream configuration that specified by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| path | path |  | Yes | string |
| data | body |  | Yes | [upstream](#upstream) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/labels/{type}

#### GET
##### Summary:

Return the labels list among `route,ssl,consumer,upstream,service`

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query | page number | No | integer |
| page_size | query | page size | No | integer |
| label | query | label filter of labels | No | string |
| type | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [ [universal_response_data](#universal_response_data) ] |

### /apisix/admin/user/login

#### POST
##### Summary:

user login

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/consumers

#### POST
##### Summary:

Create consumer

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### GET
##### Summary:

Return the consumer list according to the specified page number and page size, and can search consumers by username

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | string |
| page_size | query |  | No | string |
| username | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/consumers/{username}

#### DELETE
##### Summary:

Delete consumer

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### GET
##### Summary:

Return the consumer that specify by username

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### PUT
##### Summary:

Update the service that specify by username

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path |  | Yes | string |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/export/routes

#### GET
##### Summary:

Export all route data

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/export/routes/{id}

#### GET
##### Summary:

Export route data that specify by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

### /apisix/admin/import/routes

#### POST
##### Summary:

Import route data from swagger data

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| file | formData | swagger file | Yes | file |
| force | formData | whether to force import | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/global_rules/{id}

#### DELETE
##### Summary:

Delete global rule by specified id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### PUT
##### Summary:

Update global rule by specified id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### PATCH
##### Summary:

Update part of the global rule by specified id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/global_rules

#### GET
##### Summary:

Return the global rule list according to the specified page number and page size.

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | string |
| page_size | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### PUT
##### Summary:

Update or create the global rule

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/global_rules/{id}/{path}

#### PATCH
##### Summary:

Update inner path of  global rule that specify by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| path | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /ping

#### GET
##### Summary:

Check the alive status of the Manager API

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/plugin_configs

#### POST
##### Summary:

Create plugin config

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### GET
##### Summary:

Return plugin config list

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | Yes | string |
| page_size | query |  | Yes | string |
| search | query | search keyword | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | object |

#### PUT
##### Summary:

Update the plugin config

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/plugin_configs/{id}

#### DELETE
##### Summary:

Delete the plugin config by specified id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### GET
##### Summary:

Return the plugin config that specify by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### PATCH
##### Summary:

Update part of the plugin config by specified id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

#### PUT
##### Summary:

Update the plugin config that specify by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| data | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### /apisix/admin/plugin_configs/{id}/{path}

#### PATCH
##### Summary:

Update inner path of plugin config that specify by id

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| path | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | success | [universal_response_data](#universal_response_data) |

### Models


#### plugin_config

plugin config

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| create_time | integer |  | No |
| desc | string |  | No |
| id | string |  | Yes |
| labels | object | key/value pairs to specify attributes | No |
| plugins | object |  | Yes |
| update_time | integer |  | No |

#### global_rule

global rule

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| create_time | integer |  | No |
| id | string |  | No |
| plugins | object |  | Yes |
| update_time | integer |  | No |

#### consumer

consumer

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| create_time | integer |  | No |
| desc | string |  | No |
| id | string |  | No |
| labels | object | key/value pairs to specify attributes | No |
| plugins | object |  | No |
| update_time | integer |  | No |
| username | string |  | Yes |

#### upstream

upstream

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| checks | object |  | Yes |
| create_time | integer |  | Yes |
| desc | string |  | Yes |
| discovery_type | string | discovery type | Yes |
| enable_websocket | boolean | enable websocket for request | Yes |
| hash_on | string |  | Yes |
| id | string |  | Yes |
| key | string | the key of chash for dynamic load balancing | Yes |
| labels | object | key/value pairs to specify attributes | Yes |
| name | string |  | Yes |
| nodes | string |  | Yes |
| pass_host | string | mod of host passing | Yes |
| retries | integer |  | Yes |
| scheme | string |  | Yes |
| service_name | string |  | Yes |
| timeout | object |  | Yes |
| type | string | algorithms of load balancing | Yes |
| update_time | integer |  | Yes |
| upstream_host | string |  | Yes |

#### server_info

server info

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| last_report_time | number |  | No |
| up_time | number |  | No |
| boot_time | number |  | No |
| etcd_version | string |  | No |
| hostname | string |  | No |
| version | string |  | No |

#### ssl

ssl

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cert | string |  | Yes |
| certs | [ string ] |  | No |
| create_time | integer |  | No |
| exptime | integer |  | No |
| id | string |  | No |
| key | string |  | Yes |
| keys | [ string ] |  | No |
| labels | object | key/value pairs to specify attributes | No |
| sni | string |  | No |
| snis | [ string ] |  | Yes |
| status | integer | ssl status, 1 to enable, 0 to disable | No |
| update_time | integer |  | No |
| validity_end | integer |  | No |
| validity_start | integer |  | No |

#### service

服务

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| create_time | string |  | No |
| update_time | string |  | No |
| name | string |  | No |
| desc | string |  | No |
| upstream | [upstream_def](#upstream_def) |  | No |
| upstream_id | integer |  | No |
| plugins | string |  | No |
| script | string |  | No |
| labels | string |  | No |
| enable_websocket | boolean |  | No |

#### page

Use for page list

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| page_size | integer |  | Yes |
| page | integer |  | Yes |

#### route

route

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| create_time | integer |  | No |
| desc | string |  | No |
| enable_websocket | boolean | enable websocket for request | No |
| filter_func | string |  | No |
| host | string |  | No |
| hosts | [ string ] |  | No |
| id | string |  | Yes |
| labels | object | key/value pairs to specify attributes | No |
| methods | [ string ] |  | No |
| name | string |  | No |
| plugin_config_id | string |  | No |
| plugins | object |  | No |
| priority | integer |  | No |
| remote_addr | string | client IP | No |
| remote_addrs | [ string ] |  | No |
| script | string |  | No |
| script_id | string |  | No |
| service_id | string |  | No |
| service_protocol | string |  | No |
| status | integer | route status, 1 to enable, 0 to disable | No |
| update_time | integer |  | No |
| upstream | object |  | No |
| upstream_id | string |  | No |
| uri | string |  | No |
| uris | [ string ] |  | No |
| vars | [ string ] |  | No |

#### route_old

路由

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| create_time | string |  | No |
| update_time | string |  | No |
| uri | string |  | Yes |
| uris | [ string ] |  | Yes |
| name | string |  | Yes |
| desc | string |  | Yes |
| priority | number |  | Yes |
| methods | [ string ] |  | Yes |
| host | string |  | Yes |
| hosts | [ string ] |  | Yes |
| remote_addr | string |  | Yes |
| remote_addrs | [ string ] |  | Yes |
| vars | [ string ] |  | Yes |
| filter_func | string |  | Yes |
| script | string |  | Yes |
| script_id | number |  | Yes |
| plugins | string |  | Yes |
| plugin_config_id | number |  | Yes |
| upstream | [upstream_def](#upstream_def) |  | Yes |
| service_id | number |  | Yes |
| upstream_id | number |  | Yes |
| service_protocol | string |  | Yes |
| labels | string |  | Yes |
| enable_websocket | boolean |  | Yes |
| status | integer |  | Yes |

#### upstream_def

上游定义

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| nodes | [node](#node) |  | Yes |
| retries | integer |  | Yes |
| type | string |  | Yes |
| checks | object |  | Yes |
| hash_on | string |  | Yes |
| key | string |  | Yes |
| scheme | string |  | Yes |
| discovery_type | string |  | Yes |
| pass_host | string |  | Yes |
| upstream_host | string |  | Yes |
| name | string |  | Yes |
| desc | string |  | Yes |
| service_name | string |  | Yes |
| labels | string |  | Yes |

#### node

节点信息

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| host | string |  | Yes |
| port | integer |  | Yes |
| weight | integer |  | Yes |
| metadata | object |  | Yes |

#### base_info

基础信息

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | Yes |
| create_time | string |  | Yes |
| update_time | string |  | Yes |

#### universal_response_data

通用响应内容

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | Yes |
| message | string |  | Yes |
| request_id | string |  | Yes |
| data | object |  | Yes |