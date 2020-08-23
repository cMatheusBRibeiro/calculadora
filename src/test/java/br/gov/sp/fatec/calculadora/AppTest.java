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
        assertEquals( 2, calc.soma(), 0.1 );
    }
}
