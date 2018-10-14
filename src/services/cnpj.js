/* Constants */
import { cnpjValidate } from '../utils/constants';

class cnpjService {
    static validateCNPJ(cnpj) {
        // Data mock
        return new Promise((resolve, reject) => {
            if (cnpj === cnpjValidate) {
                return resolve({
                    cnpjValid: true
                })
            } else {
                return reject({
                    cnpjValid: false
                })
            }
        })
    }
}

export default cnpjService;