/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default {
  'route.create.define.api.request': 'Define API requests',
  'route.create.define.api.backend.server': 'Define API Backend Server',
  'route.create.plugin.configuration': 'Plugin Configuration',

  'route.result.submit.success': 'Submit Success',
  'route.result.return.list': 'Return Route List',
  'route.result.create': 'Create Route',

  'route.match.parameter.position': 'Parameter Position',
  'route.match.http.request.header': 'HTTP Request Header',
  'route.match.request.parameter': 'Request Parameter',
  'route.match.parameter.name': 'Parameter Name',
  'route.match.operational.character': 'Operational Character',
  'route.match.equal': 'Equal',
  'route.match.unequal': 'Unequal',
  'route.match.greater.than': 'Greater Than',
  'route.match.less.than': 'Less Than',
  'route.match.regex.match': 'Regex Match',
  'route.match.parameter.value': 'Parameter Value',
  'route.match.operation': 'Operation',
  'route.match.edit': 'Edit',
  'route.match.delete': 'Delete',
  'route.match.edit.rule': 'Edit Rule',
  'route.match.create.rule': 'Create Rule',
  'route.match.confirm': 'Confirm',
  'route.match.cancel': 'Cancel',
  'route.match.select.parameter.position': 'Please choose parameter position',
  'route.match.request.header.example': 'Request header name, for example: HOST',
  'route.match.parameter.name.example': 'Parameter name, for example: id',
  'route.match.input.parameter.name': 'Please input parameter name',
  'route.match.parameter.name.rule':
    'Only letters, numbers, - and _ are supported, and can only begin with letters',
  'route.match.rule': 'Only letters and Numbers are supported, and can only begin with letters',
  'route.match.choose.operational.character': 'Please choose operational character',
  'route.match.value': 'Value',
  'route.match.input.parameter.value': 'Please input parameter value',
  'route.match.advanced.match.rule': 'Advanced Routing Matching Conditions',
  'route.match.create': 'Create',

  'route.meta.name.description': 'Name And Description',
  'route.meta.api.name': 'API Name',
  'route.meta.input.api.name': 'Please input API name',
  'route.meta.api.name.rule':
    'Maximum length 100, only letters, Numbers, _, and - are supported, and can only begin with letters',
  'rotue.meta.api.rule':
    'Only letters, numbers, _ and - are supported, and can only begin with letters',
  'route.meta.description': 'Description',
  'route.meta.description.rule': 'Can not more than 200 characters',

  'route.request.config.domain.name': 'Domain Name',
  'route.request.config.domain.or.ip':
    'Domain Name or IP, support for generic Domain Name, for example: *.test.com',
  'route.request.config.input.domain.name': 'Please input Domain Name',
  'route.request.config.domain.name.rule':
    'Only letters, numbers and * are supported. * can only be at the beginning, and only single * is supported',
  'route.request.config.create': 'Create',
  'route.request.config.path': 'Path',
  'route.request.config.path.description1':
    '1. Request path, for example: /foo/index.html, supports request path prefix /foo/* ;',
  'route.request.config.path.description2': '2. /* represents all paths',
  'route.request.config.input.path': 'Please input request path',
  'route.request.config.path.rule': 'Begin with / , and * can only at the end',
  'route.request.config.basic.define': 'Request Basic Define',
  'route.request.config.protocol': 'Protocol',
  'route.request.config.choose.protocol': 'Please choose protocols',
  'route.request.config.http.method': 'HTTP Method',
  'route.request.config.choose.http.method': 'Please choose HTTP methods',
  'route.request.config.redirect': 'Redirect',
  'route.request.config.enable.https': 'Enable HTTPS',
  'route.request.config.custom': 'Custom',
  'route.request.config.forbidden': 'Forbidden',
  'route.request.config.redirect.custom': 'Custom Redirect',
  'route.request.config.redirect.custom.example': 'For examle: /foo/index.html',
  'route.request.config.redirect.301': '301(Permanent Redirect)',
  'route.request.config.redirect.302': '302(Temporary Redirect)',

  'route.http.request.header.name': 'HTTP Request Header Name',
  'route.http.action': 'Action',
  'route.http.override.or.create': 'Override/Create',
  'route.http.delete': 'Delete',
  'route.http.value': 'Value',
  'route.http.operation': 'Operation',
  'route.http.edit': 'Edit',
  'route.http.edit.request.header': 'Edit HTTP request header',
  'route.http.operate.request.header': 'Operate request header',
  'route.http.confirm': 'Confirm',
  'route.http.cancel': 'Cancel',
  'route.http.input.request.header.name': 'Please input HTTP request header name',
  'route.http.select.actions': 'Please select actions',
  'route.http.input.value': 'Please input value',
  'route.http.override.request.header': 'Override HTTP request header',

  'route.request.override.input': 'Input',
  'route.request.override.domain.name.or.ip': 'Domain Name/IP',
  'route.request.override.use.domain.name.default.analysis':
    'When using Domain Name, it will analysis the local: /etc/resolv.conf by default',
  'route.request.override.input.domain.or.ip': 'Please input Domain Name/IP',
  'route.request.override.domain.or.ip.rules': 'Only letters, numbers and . are supported',
  'route.request.override.input.port.number': 'Please input port number',
  'route.request.override.port.number': 'Port Number',
  'route.request.override.input.weight': 'Please input weight',
  'route.request.override.weight': 'Weight',
  'route.request.override.create': 'Create',
  'route.request.override': 'Requests Override',
  'route.request.override.protocol': 'Protocol',
  'route.request.override.select.protocol': 'Please select protocol',
  'route.request.override.stay.same': 'Stay The Same',
  'route.request.override.path': 'Request Path',
  'route.request.override.edit': 'Edit',
  'route.request.override.new.path': 'New Path',
  'route.request.override.input.path': 'Please input request path',
  'route.request.override.path.example': 'For example: /foo/bar/index.html',
  'route.request.override.upstream': 'Upstream',
  'route.request.override.connection.timeout': 'Connection Timeout',
  'route.request.override.input.connection.timeout': 'Please inout connection timeout',
  'route.request.override.send.timeout': 'Send Timeout',
  'route.request.override.inout.send.timeout': 'Please input send timeout',
  'route.request.override.receive.timeout': 'Receive Timeout',
  'route.request.override.inout.receive.timeout': 'Please input receive timeout',

  'route.constants.define.api.request': 'Define API Request',
  'route.constants.preview': 'Preview',
  'route.constants.define.api.backend.serve': 'Define API Backend Server',
  'route.constants.plugin.configuration': 'Plugin Configuration',

  'route.create.management': 'Route Management',

  'route.list.name': 'Name',
  'route.list.domain.name': 'Domain Name',
  'route.list.path': 'Path',
  'route.list.description': 'Description',
  'route.list.edit.time': 'Edit Time',
  'route.list.operation': 'Operation',
  'route.list.edit': 'Edit',
  'route.list.delete.confrim': 'Are you sure to delete this route?',
  'route.list.delete.success': 'Delete Success!',
  'route.list.confirm': 'Confirm',
  'route.list.cancel': 'Cancel',
  'route.list.delete': 'Delete',
  'route.list': 'Route List',
  'route.list.input': 'Please input',
  'route.list.create': 'Create',
  'page.route.radio.static': 'Static',
  'page.route.radio.regx': 'Regx',
  'page.route.form.itemLabel.from': 'From',
};
