package com.IndianCourtureV1;


import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseMain
{


    @Before
    public void setUp()
    {
        openBrowser("");
    }
    @After
    public void tearDown()
    {
        closeBrowser();
    }
}
