import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// export const options = {
//     vus: 500,
//     duration: '1s',
// };

    const url = 'https://www.alfransi.com.sa/english/home';

export default function () {
    const res = http.get(url);
    //sleep(1);
    check(res, { 'status was 200': (r) => r.status == 200 });
}

export function handleSummary(data) {
    return {
        "Report.html": htmlReport(data),
    };
}