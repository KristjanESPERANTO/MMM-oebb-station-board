/** 
 * ÖBB Station Arrivals & Departures
 * Show arrivals and departures of a specific ÖBB station
 * 
 * Version 0.0.0
 * By Michael Scharl <michael.scharl@me.com>
 * 
 * License MIT
 * 
 * This is an autogenerated file. DO NOT EDIT!
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('oebb-api')) :
    typeof define === 'function' && define.amd ? define(['oebb-api'], factory) :
    (global = global || self, factory(global.oebb));
}(this, function (oebb) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var GET_STATION_DATA = 'get_station_data';
    var RECEIVED_STATION_DATA = 'received_station_data';

    var NodeHelper = require('node_helper');
    module.exports = NodeHelper.create({
        socketNotificationReceived: function (notification, payload) {
            switch (notification) {
                case GET_STATION_DATA:
                    this._fetchStationData(payload);
            }
        },
        _fetchStationData: function (stationNumber) {
            var _this = this;
            var options = __assign({}, oebb.getStationBoardDataOptions(), { evaId: stationNumber });
            oebb.getStationBoardData(options)
                .then(function (stationResponse) {
                _this.sendSocketNotification(RECEIVED_STATION_DATA, stationResponse);
            });
        }
    });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZV9oZWxwZXIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=