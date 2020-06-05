package com.IndianCourtureV1;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(features = ".",tags = {"@SanityPack"}, plugin= {"pretty","html:test-out"})
public class Run
{

}
