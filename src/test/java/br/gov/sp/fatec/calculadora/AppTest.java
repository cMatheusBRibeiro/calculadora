package br.gov.sp.fatec.calculadora;

import org.junit.Test;
import static org.junit.Assert.*;


/**
 * Unit test for simple App.
 */
public class AppTest
{
    @Test
    public void testSoma()
    {
        Calculadora calc = new Calculadora();
        assertEquals( 2.0, calc.soma(), 0.1 );
    }

    @Test
    public void testSubtracao()
    {
        Calculadora calc = new Calculadora(2.0, 3.0);
        assertEquals( -1.0, calc.subtracao(), 0.1 );
    }

    @Test
    public void testMultiplicacao()
    {
        Calculadora calc = new Calculadora(2.0, 3.0);
        assertEquals( 6.0, calc.multiplicacao(), 0.1 );
    }

    @Test
    public void testDivisao()
    {
        Calculadora calc = new Calculadora(4.0, 2.0);
        assertEquals( 2.0, calc.divisao(), 0.1 );
    }
}
