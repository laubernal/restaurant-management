// import { Staff } from '../entities/Staff';

export function totalCostTemplate(): string {
  return `
        metadata {
            Número total personal:
            Camareros {
                Total: 25,
                Wage: 8 $/h
            }
        }

        Total cost {
            Total: 500,
            currency: $
        }
    `;
}
