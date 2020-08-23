package br.gov.sp.fatec.calculadora;

public class Calculadora {
    private Double n1, n2;

    public Calculadora(Double n1, Double n2)
    {
        this.n1 = n1;
        this.n2 = n2;
    }

    public Calculadora()
    {
        this(1.0, 1.0);
    }

    public Double soma()
    {
        return this.n1 + this.n2;
    }

    public Double subtracao()
    {
        return this.n1 - this.n2;
    }

    public Double multiplicacao()
    {
        return this.n1 * this.n2;
    }

    public Double divisao()
    {
        return (this.n2 != 0.0) ? (this.n1 / this.n2) : 0;
    }
}
