
const dustData = (sidoName, callback) => {
  const serviceKey = 'rOGI%2BIvn6bqhwghISJpom2Dz1zr0tbNdR%2Blm8fl5xrLwUFt9EGQHinJBCAQhO4c3yub9o5bhWPy9AxyTKTen%2BQ%3D%3D';
  
  const requestUrl =  "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";
  let queryParams = "?" + encodeURIComponent("ServiceKey") + "=" + serviceKey; //서비스키
  queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("1");
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
  queryParams +=
    "&" + encodeURIComponent("dataTerm") + "=" + encodeURIComponent("DAILY"); //데이터측정시간

  queryParams +=
    "&" + encodeURIComponent("sidoName") + "=" + encodeURIComponent(sidoName); //시도 이름
  queryParams +=
    "&" + encodeURIComponent("ver") + "=" + encodeURIComponent("1.3");
  queryParams +=
    "&" + encodeURIComponent("_returnType") + "=" + encodeURIComponent("json");
  request(
    {
      url: requestUrl + queryParams,
      method: "GET",
    },
    function (error, response, body) {
      callback(body);
    }
  );
};
