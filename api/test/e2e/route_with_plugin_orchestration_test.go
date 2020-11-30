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
package e2e

import (
	"github.com/stretchr/testify/assert"
	"io/ioutil"
	"net/http"
	"testing"
)

func TestRoute_With_Plugin_Orchestration(t *testing.T) {
	bytes, err := ioutil.ReadFile("../testdata/dag-conf.json")
	assert.Nil(t, err)
	dagConf := string(bytes)
	bytes, err = ioutil.ReadFile("../testdata/invalid-dag-conf.json")
	assert.Nil(t, err)
	invalidDagConf := string(bytes)

	tests := []HttpTestCase{
		{
			caseDesc:     "make sure the route is not created",
			Object:       APISIXExpect(t),
			Method:       http.MethodGet,
			Path:         "/hello",
			ExpectStatus: http.StatusNotFound,
			ExpectBody:   `{"error_msg":"404 Route Not Found"}`,
		},
		{
			caseDesc:     "create route with invalid dag conf",
			Object:       MangerApiExpect(t),
			Method:       http.MethodPut,
			Path:         "/apisix/admin/routes/r1",
			Body:         invalidDagConf,
			Headers:      map[string]string{"Authorization": token},
			ExpectStatus: http.StatusBadRequest,
		},
		{
			caseDesc:     "make sure the route created failed",
			Object:       APISIXExpect(t),
			Method:       http.MethodGet,
			Path:         "/hello",
			ExpectStatus: http.StatusNotFound,
			ExpectBody:   `{"error_msg":"404 Route Not Found"}`,
            Sleep:        sleepTime,
		},
		{
			caseDesc:     "create route with correct dag cof",
			Object:       MangerApiExpect(t),
			Method:       http.MethodPut,
			Path:         "/apisix/admin/routes/r1",
			Body:         dagConf,
			Headers:      map[string]string{"Authorization": token},
			ExpectStatus: http.StatusOK,
		},
		{
			caseDesc:     "verify the route(should be blocked)",
			Object:       APISIXExpect(t),
			Method:       http.MethodGet,
			Path:         "/hello",
			Query:        "t=root.exe",
			ExpectStatus: http.StatusForbidden,
			ExpectBody:   `blocked`,
            Sleep:        sleepTime,
		},
		{
			caseDesc:     "verify the route(should not be blocked)",
			Object:       APISIXExpect(t),
			Method:       http.MethodGet,
			Path:         "/hello",
			ExpectStatus: http.StatusOK,
			ExpectBody:   `hello world`,
		},
		{
			caseDesc:     "delete route",
			Object:       MangerApiExpect(t),
			Method:       http.MethodDelete,
			Path:         "/apisix/admin/routes/r1",
			Headers:      map[string]string{"Authorization": token},
			ExpectStatus: http.StatusOK,
		},
		{
			caseDesc:     "hit the route just deleted",
			Object:       APISIXExpect(t),
			Method:       http.MethodGet,
			Path:         "/hello",
			ExpectStatus: http.StatusNotFound,
			ExpectBody:   `{"error_msg":"404 Route Not Found"}`,
			Sleep:        sleepTime,
		},
	}

	for _, tc := range tests {
		testCaseCheck(tc)
	}
}
