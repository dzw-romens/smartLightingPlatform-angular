export class AppConstant {
  getAUTH_EVENTS() {
    return {
      loginSuccess: '登录成功',
      loginFailed: '登录失败',
      logoutSuccess: '退出成功',
      sessionTimeout: 'Session会话过期，请重新登录',
      unAuthenticated: '您没有权限访问资源',
      untAuthorized: '您还没有登录'
    }
  }

  getUSER_ROLES() {
    return {
      all: '*',
      root: 'root',
      childRoot: 'childroot',
      manufacturer: 'manufacturer',
      childManufacturer: 'childmanufacturer',
      integrator: 'integrator',
      childIntegrator: 'childintegrator',
      operators: 'operators',
      childOperators: 'childoperators'
    }
  }

  getAPP_CONFIG() {
    return {
      URL: '/rest/',
      WebSocketUrl: '/rest/socketServer',
      PAGE: {
        itemsPerPage: 10
      },
      GROUP: {
        limit: 15
      }
    }
  }

  getSOCKER_DATATYPE() {
    return {
      unHandleMessageNumber: "unSolvedCount",
      alarmMsg: "alarmMsg"
    }
  }
  getSTATUS_MAP() {
    return {
      light: {
        'on': 'app/assets/img/light_normal.png',
        'off': 'app/assets/img/light_close.png',
        'half-on': 'app/assets/img/light_half-on.png',
        'broken': 'app/assets/img/light_broken.png',
        'lost': 'app/assets/img/light_lose.png'
      },
      street: ['app/assets/img/icon-signal.png', 'app/assets/img/icon-loop.png']
    }
  }
  getDEVICE_FILTER() {
    return {
      cardStatusList: {
        normal: 'normal',
        abnormal: 'abnormal',
        offline: 'offline'
      }
    }
  }
  getMAP_STYLE() {
    return {
      styleJSon: [
        {
          "featureType": "land",
          "elementType": "geometry",
          "stylers": {
            "color": "#242731",
            "visibility": "on"
          }
        },
        {
          "featureType": "building",
          "elementType": "geometry",
          "stylers": {
            "color": "#39476d",
            "weight": "1",
            "lightness": -73,
            "saturation": -100,
            "visibility": "off"
          }
        },
        {
          "featureType": "highway",
          "elementType": "all",
          "stylers": {
            "color": "#6b7796",
            "hue": "#3d85c6",
            "lightness": -50,
            "saturation": -80,
            "visibility": "on"
          }
        },
        {
          "featureType": "arterial",
          "elementType": "geometry",
          "stylers": {
            "color": "#6b7796",
            "hue": "#3177c8",
            "weight": "1",
            "lightness": -60,
            "saturation": -85,
            "visibility": "on"
          }
        },
        {
          "featureType": "green",
          "elementType": "geometry",
          "stylers": {
            "color": "#111419",
            "visibility": "on"
          }
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": {
            "color": "#111419",
            "visibility": "on"
          }
        },
        {
          "featureType": "subway",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#181818",
            "visibility": "off"
          }
        },
        {
          "featureType": "railway",
          "elementType": "geometry",
          "stylers": {
            "lightness": -52,
            "visibility": "off"
          }
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#313131"
          }
        },
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#6b7796"
          }
        },
        {
          "featureType": "manmade",
          "elementType": "geometry",
          "stylers": {
            "color": "#242731",
            "visibility": "on"
          }
        },
        {
          "featureType": "local",
          "elementType": "geometry",
          "stylers": {
            "color": "#6b7796",
            "weight": "0.4",
            "lightness": -60,
            "saturation": -80,
            "visibility": "on"
          }
        },
        {
          "featureType": "subway",
          "elementType": "geometry",
          "stylers": {
            "lightness": -65,
            "visibility": "off"
          }
        },
        {
          "featureType": "railway",
          "elementType": "all",
          "stylers": {
            "lightness": -40,
            "visibility": "off"
          }
        },
        {
          "featureType": "boundary",
          "elementType": "geometry",
          "stylers": {
            "color": "#8b8787",
            "weight": "1",
            "lightness": -29,
            "visibility": "off"
          }
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }
      ]
    }
  }
}